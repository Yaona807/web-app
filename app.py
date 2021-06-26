from flask import Flask
from flask import render_template, request

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('index.html')

@app.route('/',methods=['POST'])
def end():
    result_str = ''.join([request.form.get('name'),':',request.form.get('end')])
    return result_str


if __name__ == '__main__':
    app.run(debug=True)
