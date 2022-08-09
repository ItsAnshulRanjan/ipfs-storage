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
const Signup = () => {
  const [validated, setValidated] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      console.log("Submitted");
      const SignupForm = new FormData();
      SignupForm.append("email", email);
      SignupForm.append("username", username);
      SignupForm.append("password", password);
      SignupForm.append("cpassword", confirmPassword);
      return new Promise((resolve, reject) => {
        fetch("http://127.0.0.1:5000/register", {
          method: "POST",
          body: SignupForm,
        })
          .then((res) => res.text())
          .then((data) => {
            data = JSON.parse(data);
            resolve(data);
            if (data.status === 200) {
              console.log("Signup Successful");
              //   window.location.href = "/dashboard";
            } else {
              console.log("Signup Failed");
            }
          })
          .catch((err) => {
            console.log("Error is ", err);
            reject(err);
          });
      });
    }
  };

  return (
    <div className="login-container h-screen flex md:flex-column bg-red-300 justify-center items-center p-24">
      <div className="login-form-container p-12 bg-white rounded-lg">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="w-full mx-auto"
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                //   Allow all characters except space
                pattern="^[^\s]+$"
                placeholder="Enter username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              minLength={8}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="fomBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              minLength={8}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
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
export default Signup;
