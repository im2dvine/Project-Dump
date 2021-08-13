import React from "react";
import { Link } from "react-router-dom";

const CommentCard = ({ comment }) => {
    return (
      <div className="card col-lg-4 text-center shadow">
        <div className="card-body">
          <h5 className="card-title">{comment.name}</h5>
          <br></br>
          <h6 className="card-subtitle mb-2 mono">{comment.content}</h6>
          <br></br>
          <br></br>
          <Link to={`/edit/${comment.id}`} className="card-link color-alert">
            Edit
          </Link>
        </div>
      </div>
    );
};

export default CommentCard;