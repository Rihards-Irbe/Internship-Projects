from http.server import HTTPServer, BaseHTTPRequestHandler
from flask import Flask, render_template, request, redirect, session
import requests
import json
import site

app = Flask(__name__)

@app.route('/')
@app.route('/Output.js')
@app.route('/Captcha.js')
@app.route('/EmailValidator.js')
def Test():
    return render_template('Test.html')
    
    
@app.route('/processUserInfo', methods=['POST'])
def processUserInfo():
    print('USER INFO RECEIVED')
    print('------------------')
    print(request.json)
    print('------------------')
    return'Info received Successfully'

if __name__ == '__main__':
    app.run(debug=True) 
httpd.serve_forever()