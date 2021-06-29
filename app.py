from flask import Flask
from flask import render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ranking.db'
db = SQLAlchemy(app)


class Result(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(20), nullable=False)
    score = db.Column(db.Integer)


@app.route('/')
def main():
    return render_template('home.html')


@app.route('/game')
def start():
    return render_template('game.html')


@app.route('/game', methods=['POST'])
def end():
    max_save_count = 100
    user_name = request.form.get('name')
    score = request.form.get('end')

    new_result = Result(user_name=user_name, score=score)

    results = Result.query.order_by(Result.score.desc()).all()

    # ランキングの最大数まで保存していた場合
    if len(results) >= max_save_count:
        # 一番下のランクデータを削除(新しいデータが大きい場合のみ)
        if results[-1].score < int(new_result.score):
            db.session.delete(results[-1])
        else:
            return redirect('/ranking')

    db.session.add(new_result)
    db.session.commit()

    return redirect('/ranking')


@app.route('/ranking')
def ranking_print():
    # scoreを用いて降順ソート
    results = Result.query.order_by(Result.score.desc()).all()
    print(results[0].user_name)
    return render_template('ranking.html', results=results)


if __name__ == '__main__':
    app.run(debug=True)
