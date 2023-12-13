from flask import Flask , render_template
import psycopg2

from psycopg2 import Error


app = Flask(__name__)
@app.route("/")
@app.route("/home")
def home():
    return render_template('index.html')
    
@app.route("/nuclear_electric_power")
def electric_power():
    return render_template('nuclear.html')

@app.route("/nuclear_units")
def units():
    return render_template('nuclearqindex.html')
    
@app.route("/outages")
def outages():
    return render_template('Outages Map.html')
if __name__ == '__main__':
    app.run(debug=True)
