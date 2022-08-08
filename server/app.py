

from flask import Flask,render_template,request,session,redirect
import pyrebase
import json 
import subprocess
from werkzeug.utils import secure_filename
import os
import requests
app=Flask(__name__)

app.secret_key=("97417099682342342wererewrwr")
config={
"apiKey":"AIzaSyCzeZb62c_LyBLVSGwMMiVWJ8frHp9dKi4",
    "authDomain":"test-ipfs-8d946.firebaseapp.com",
    "projectId":"test-ipfs-8d946",
    "storageBucket":"test-ipfs-8d946.appspot.com",
    "messagingSenderId":"72753508870",
    "appId":"1:72753508870:web:52d51c4f54bf06a83f4987",
    "databaseURL":"https://test-ipfs-8d946-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

firebase=pyrebase.initialize_app(config)
auth=firebase.auth()
db=firebase.database()

# @app.route("/")
# def home_page():
    
#     if "UserName" in session:
#         return render_template("upload.html")
#     else:
#         return render_template("login.html")


@app.route("/register",methods=["POST"])
def registerUser():
    if request.method=="POST":
        username=request.form.get("username")
        email=request.form.get("email")
        passwd=request.form.get("password")
        cpasswd=request.form.get("cpassword")

        request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key={0}".format(config["apiKey"])
        headers = {"content-type": "application/json; charset=UTF-8"}
        data = json.dumps({"email": email, "password": passwd, "returnSecureToken": True,"displayName":username})

        request_object = requests.post(request_ref, headers=headers, data=data)
        out=request_object.json()
        auth.send_email_verification(out["idToken"])

        return "verify email sent"


@app.route("/login",methods=["POST"])
def login():
        email=request.form.get("email")
        password=request.form.get("password")
        try:
            user=auth.sign_in_with_email_and_password(email,password)
        except:
            return "failed to login"
        UserInfo=auth.get_account_info(user["idToken"])
        print(UserInfo)
        session["UserName"]=user["displayName"]
        session["UserID"]=UserInfo["users"][0]["localId"]
        

        return "done"

        



                

if __name__=="__main__":
    app.run(debug=True)
