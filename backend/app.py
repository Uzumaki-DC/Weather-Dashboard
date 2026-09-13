from flask import Flask

app = Flask(__name__)

@app.route("/api/health")
def home():
    return {
        "status": "OK",
        "message": "Weather dashboard API is running"
    }