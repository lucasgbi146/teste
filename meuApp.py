
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')





app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

class User(db.Model):
    identificador = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(40), unique=True, nullable=False)
    senha = db.Column(db.String(12), nullable=False)
    email = db.Column(db.String(180), unique=True, nullable=False)
    
    def __repr__(self): #metedo
        return "<User %r>" % self.usuario



if __name__ == "__main__":
    app.run(debug=True)