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

  const downloadFileFromBlob = (blob, fileName) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    console.log("File URL is ", url);
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getFile = (file) => {
    // Get request to the server to get the file

    console.log("GetFile called with file as ", file);

    fetch(`http://127.0.0.1:5000/download/${file}`).then((response) => {
      console.log("Response in get file ", response);
      const a = document.createElement("a");
      a.href = response.url;
      a.download = file;
      a.click();

      window.URL.revokeObjectURL(response.url);
      console.log("File downloaded");
    });
  };

  const download = () => {
    const downloadForm = new FormData();
    downloadForm.append("password", "anirudhlakhotia");
    downloadForm.append("filename", "Cloud.png");
    return new Promise((resolve, reject) => {
      fetch("http://127.0.0.1:5000/verify", {
        method: "POST",
        body: downloadForm,
      }).then((response) => {
        console.log("Response is ", response);
        if (response.status === 200) {
          console.log("File is available");
          getFile("Cloud.png");
        } else {
          reject("Error");
        }
      });
    });

    //     .then((response) => {
    //       console.log("REACHED HERE");
    //       // time the process of downloading the file
    //       let time = new Date();

    //       response.blob().then((blob) => {
    //         console.log(blob);
    //         downloadFileFromBlob(blob, "Cloud.png");
    //         console.log("Time taken to download " + (new Date() - time));
    //       });
    //     })
    //     .catch((error) => {
    //       reject(error);
    //     });
    // });
  };

  function storeFile(file, encPhrase) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("key", encPhrase);
    let time = new Date();
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
          console.log("Time taken for upload is " + (new Date() - time));
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
          <div className="download-container flex align-center justify-center">
            <h1 className="">
              <a onClick={download} class="download">
                Download
              </a>
            </h1>
          </div>
        </>
      )}
      {encrypting && <EncryptionLoading />}
    </>
  );
};

export default Dashboard;
