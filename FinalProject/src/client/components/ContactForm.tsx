import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";



const ContactForm = () => {
  let history = useHistory();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, content }),
    };  
    fetch("/api/ContactForm", requestOptions);
    goHome();
  };

  function goHome() {
    history.push("/comments");
}

  return (
    <>
      <div className="d-flex text-center justify-content-center card" id="contact-card">
        <h2 className="mono">Contact Us!</h2>
        <h6 className="mono">Have a suggestion, comment or upcoming event you would like to tell us directly? Reach out with your name, email and message. We are so happy to hear from you!</h6>
        
        <br></br>
        <input
          type="text"
          id="name-input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        
        <br></br>
        <input
          type="text"
          id="email-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        
        <br></br>
        <input
          type="text"
          id="message-input"
          placeholder="Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        
        <br></br>
        <button onClick={() => handleSubmit()} className="btn btn-primary" id="submit-button">
          Submit!
      </button>
      </div>
    </>
  );
};

export default ContactForm;

