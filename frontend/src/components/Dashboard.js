import React from "react";
import { useState, forwardRef, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import emptyAnimation from "../assets/empty_animation.gif";
import "./Dashboard.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import EncryptionLoading from "../utils/EncryptionLoading.js";
const Dashboard = () => {
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [showEncPhrase, setShowEncPhrase] = useState(false);
  const [encPhrase, setEncPhrase] = useState("");
  const [validated, setValidated] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
  const [encrypting, setEncrypting] = useState(false);
  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      setShowEncPhrase(false);
      // Send the file to the server with the encPhrase
      setSnackbarOpen(true);
      storeFile(file, encPhrase);
    }
  };
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  function handleUpload(event) {
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];
    setFile(file);
    setShowEncPhrase(true);
  }
  function storeFile(file, encPhrase) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("key", encPhrase);

    return new Promise((resolve, reject) => {
      fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Data is ", data);
          resolve(data);
          setEncrypting(false);
          setShowUploadSuccess(true);
        })
        .catch((err) => {
          console.log("Error is ", err);
          reject(err);
        });
    });
  }

  return (
    <>
      {!encrypting && (
        <>
          <div class="empty-container">
            <img src={emptyAnimation} alt="empty animation" className="empty" />
          </div>
          <div className="text-container">
            <h1 className="empty-text">
              We didn't find any data.{" "}
              <input
                type="file"
                onChange={handleUpload}
                ref={hiddenFileInput}
                style={{ display: "none" }}
              />
              <a onClick={handleClick} class="upload-link">
                Click here
              </a>{" "}
              to upload your data.
            </h1>
          </div>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => {
              setSnackbarOpen(false);
              setEncrypting(true);
            }}
          >
            <Alert
              onClose={handleSnackBarClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              File uploaded successfully!
            </Alert>
          </Snackbar>
          <Snackbar
            open={showUploadSuccess}
            autoHideDuration={3000}
            onClose={() => setShowUploadSuccess(false)}
          >
            <Alert
              onClose={handleSnackBarClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              File encrypted successfully!
            </Alert>
          </Snackbar>
          <Modal
            show={showEncPhrase}
            onHide={() => {
              setShowEncPhrase(false);
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Set your Encryption Phrase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 mx-auto">
                  <Form.Group as={Row} md="12" controlId="validationCustom01">
                    <Form.Label>Encryption Phrase</Form.Label>
                    <Form.Control
                      required
                      minLength={8}
                      type="text"
                      placeholder=""
                      // Should contain at least 1 number

                      onChange={(event) => {
                        setEncPhrase(event.target.value);
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter at least 8 characters.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3 mx-auto">
                  <Form.Check
                    required
                    label="I understand that the encryption phrase is non recoverable and there is no way to decrypt the file if I lose it"
                    feedback="This field is required"
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit">Save Changes</Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setShowEncPhrase(false);
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
      {encrypting && <EncryptionLoading />}
    </>
  );
};

export default Dashboard;
