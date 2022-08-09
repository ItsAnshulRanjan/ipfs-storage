import React from "react";
import LoginImage from "../assets/login.png";
import {
  Row,
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormCheck,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [validated, setValidated] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  let nav = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      console.log("Submitted");
      const LoginForm = new FormData();
      LoginForm.append("email", email);
      LoginForm.append("password", password);
      return new Promise((resolve, reject) => {
        fetch("http://127.0.0.1:5000/login", {
          method: "POST",
          body: LoginForm,
          credentials: "include",
        }).then((res) => {
          console.log("Response is ", res);
          //Log the request cookies in the console
          console.log(res.headers.get("set-cookie"));

          res.text().then((data) => {
            data = JSON.parse(data);
            resolve(data);
            console.log(data);
            let cookie;
            cookie = `UserID=${data.UserID};UserName=${data.UserName};Verified=${data.verified};`;

            console.log("Cookie is ", cookie);

            if (data.status === 200) {
              console.log("Login Successful");
              //   Set Cookie in Browser's Local Storage
              localStorage.setItem("cookie", cookie);

              //   Navigate to the dashboard page with passed cookie
              nav("/dashboard", { state: { cookie: cookie } });
            } else {
              console.log("Login Failed");
            }
          });
        });
      });
    }
  };

  return (
    <div className="login-container h-screen flex md:flex-column bg-red-300 justify-center items-center p-24">
      <div className="login-form-container p-4 bg-white rounded-lg m-12 w-screen">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="w-1/2 mx-aut"
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              minLength={7}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
