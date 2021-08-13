import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Compose = (props: { fetchComments: Function }) => {
  let history = useHistory();
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content }),
    };

    fetch("/api/Comments", requestOptions).then(response => props.fetchComments());
  };

  return (
    <div className="col-12 justify-content-center">
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Message"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button onClick={() => handleSubmit()} className="btn btn-primary">
        Post Comment
      </button>
    </div>
  );
};

export default Compose;
