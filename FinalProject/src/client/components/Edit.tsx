import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { IComment } from "../utils/types";

const Edit = () => {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [comment, setComment] = useState<IComment>({ id: id, name: "", content: ""});
    const [name, setName] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/Comments/${id}`);
            let comment = await res.json();
            setComment(comment);
        })();
    }, []);

    const handlePut = () => {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, content: content }),
        };
        fetch(`/api/Comments/${id}`, requestOptions).then((response) => response.json());
        goHome()
    };

    const handleDelete = () => {
        const requestOptions = {
            method: "DELETE"
        };
        fetch(`/api/Comments/${id}`, requestOptions).then((response) => response.json());
        goHome()
    };

    function goHome() {
        history.push("/comments");
    }

    return (
      <>
        <div className="d-flex text-center justify-content-center card" id="edit-card">
          <div className="row-12">
            <br></br>
            <label>{comment.name}: </label>
            <br></br>
            <input
              type="text"
              placeholder={comment.content}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></input>
            <br></br>
            <br></br>
            <button onClick={() => handlePut()} className="btn btn-primary">
              Update Comment
            </button>
            <br></br>
            <br></br>
            <button onClick={() => handleDelete()} className="btn btn-primary">
              Delete Comment
            </button>
            <br></br>
            <br></br>
          </div>
        </div>
      </>
    );
};

export default Edit;