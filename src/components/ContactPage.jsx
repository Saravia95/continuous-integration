import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser"; // Updated import
export function ContactPage() {
  const navigation = useNavigate();
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    website: "",
    name: "",
    email: "",
    message: "",
  });

  const portfolioPageButtonClick = () => {
    navigation("/portfolio");
  };

  const homePageButtonClick = () => {
    navigation("/");
  };

  const aboutPageButtonClick = () => {
    navigation("/about");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (formData.website !== "") {
      return;
    }

    emailjs
      .sendForm(
        "service_m33h538", // Your EmailJS service ID
        "template_eqkix2s", // Your EmailJS template ID
        formRef.current, // The form object
        "NiUoGHCTP0WA668gA" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Form Data Submitted: ", formData);
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          className="container2"
          style={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "fill-content",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="portrait-wrapper" style={{ marginLeft: "auto" }}>
            <button
              className="portrait"
              style={{
                overflow: "hidden",
                borderStyle: "outset",
                width: "20vw",
                minWidth: "125px",
              }}
              onClick={homePageButtonClick}
            >
              Home
            </button>
          </div>
          <div className="portrait-wrapper">
            <button
              className="portrait"
              style={{
                overflow: "hidden",
                borderStyle: "outset",
                width: "20vw",
                minWidth: "125px",
              }}
              onClick={portfolioPageButtonClick}
            >
              Portfolio
            </button>
          </div>

          <div className="portrait-wrapper" style={{ marginRight: "auto" }}>
            <button
              className="portrait"
              style={{
                overflow: "hidden",
                borderStyle: "outset",
                width: "20vw",
                minWidth: "125px",
              }}
              onClick={aboutPageButtonClick}
            >
              About
            </button>
          </div>
        </div>
      </div>

      <div>
        {!isSubmitted && (
          <div>
            <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
              <h2 style={styles.heading}>Contact Me</h2>

              <div style={styles.formGroup}>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="name" style={styles.label}>
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Name"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Email"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  placeholder="Message"
                  required
                />
              </div>

              <button type="submit" style={styles.button}>
                Submit
              </button>
            </form>
          </div>
        )}
        {isSubmitted && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* */}

            <h1
              style={{
                textShadow: "3px 3px #000000",
                backgroundColor:
                  "radial-gradient(circle, #0080ff41 0%, rgba(128,128,128,0) 100%)",
              }}
            >
              Message Sent
            </h1>
            <button type="submit" onClick={onBackButtonClick} style={{}}>
              Home
            </button>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#0c0c0c", // Dark background
    color: "#f0f0f0", // Light text
  },
  form: {
    width: "400px",
    padding: "60px 60px 60px 45px",
    backgroundColor: "#0c0c0c", // Dark form background
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow
  },
  heading: {
    textAlign: "center",
    marginBottom: "40px",
    marginTop: "0px",
    color: "#ffffff", // White text for heading
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#cccccc", // Light grey text for labels
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#1e1e1e", // Dark input background
    color: "#ffffff", // White text
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#1e1e1e", // Dark textarea background
    color: "#ffffff", // White text
    fontSize: "16px",
    minHeight: "100px",
  },
  button: {
    width: "100%",
    margin: "auto",
    alignItems: "center",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#00b0ff", // Dark purple button
    color: "#ffffff", // White text
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  button2: {
    position: "absolute",
    width: "75px",
    height: "75px",
    margin: "auto",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "rgb(255, 255, 255)", // Dark purple button
    color: "rgb(30, 30, 30)", // White text
    fontSize: "42px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
    left: "25px",
    top: "25px",
  },
};
