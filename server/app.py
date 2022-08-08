

from flask import Flask,render_template,request,session,redirect
import pyrebase
import json 
import subprocess
from werkzeug.utils import secure_filename
import os
import requests
app=Flask(__name__)

def encrypt_file(filedata,key,filename):

    fernet=Fernet(key)
    encrypted=fernet.encrypt(filedata)

    a=open(app.config["uploadFolder"]+filename,"wb")
    a.write(encrypted)
    a.flush()
    a.close()

def decrypt_file(filename,key):
    fernet=Fernet(key)
    print(app.config["uploadFolder"]+filename+"\\"+filename)
    encrypted=open(app.config["uploadFolder"]+"encrypted_"+filename+"\\"+filename,"rb").read()
    decrypted=fernet.decrypt(encrypted)
    a=open(app.config["uploadFolder"]+"decrypted"+filename,"wb")
    a.write(decrypted)
    a.flush()
    a.close()
    
def upload_file(file,hash):
                users=db.get().val()
 
              
                opp=subprocess.run(["w3","put" ,file],stdout=subprocess.PIPE,stderr=subprocess.PIPE,shell=True)
                filename=file.split("\\")[-1].replace(".",",")
                filecid=opp.stdout.decode().split()[1]
                print(filename,filecid)
                data={
                                "data":[hash.decode(),filecid]
                            }
                db.child(session["UserID"]).child(filename).set(data)

                
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
@app.route("/upload",methods=['GET', 'POST'])
def uploadToServer():
    if request.method=="POST":
        files=request.files.get("file")

        secretKey=request.form.get("key")
        
        
        filename=secure_filename(files.filename)
        filedata=files.read()
        key,hash=encrypting(secretKey,app.secret_key)
        encrypt_file(filedata,key,filename)
        upload_file(os.path.join(r"C:\Users\monish\Desktop\hackofest\UploadFiles",filename),hash)
        return "uploaded"


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
