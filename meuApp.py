from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return "pagina inicial"

if __name__ == "__main__":
    app.run(debug=True)
