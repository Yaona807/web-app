from flask import Flask
from flask import render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ranking.db'
db = SQLAlchemy(app)

class Result(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(20),nullable=False)
    score = db.Column(db.Integer)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/',methods=['POST'])
def end():
    user_name = request.form.get('name')
    score = request.form.get('end')

    new_result = Result(user_name=user_name, score=score)

    db.session.add(new_result)
    db.session.commit()

    return redirect('/ranking')

@app.route('/ranking')
def ranking_print():
    results = Result.query.all()
    return render_template('ranking.html',results=results)



if __name__ == '__main__':
    app.run(debug=True)
