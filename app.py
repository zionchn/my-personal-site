from datetime import datetime
from flask import Flask, render_template

app = Flask(__name__)


# Processes the year and then my name, instead of hardcoding it in base.html
@app.context_processor
def inject_globals():
    return {
        "current_year": datetime.now().year,
        "site_owner": "Zion Chukwunelo",
    }

# home route
@app.route("/")
def home():
    return render_template("index.html")


# portfolio route
@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")


# About route
@app.route("/about")
def about():
    return render_template("about.html")


# Contact route
@app.route("/contact")
def contact():
    return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True, port=5002)