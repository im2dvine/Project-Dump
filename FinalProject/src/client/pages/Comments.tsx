import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import Compose from "../components/Compose";
import { Recycle } from "react-bootstrap-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Home: React.FC<IHome> = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    fetch("/api/Comments")
      .then((res) => res.json())
      .then((comments) => setComments(comments))
      .catch((err) => console.error(err));
  }
  const [contactform, setContactForm] = useState([]);

  // useEffect(() => {
  //   fetchContactForm();
  // }, []);

  // const fetchContactForm = () => {
  //   fetch("/api/ContactForm")
  //     .then((res) => res.json())
  //     .then((contactform) => setContactForm(contactform))
  //     .catch((err) => console.error(err));
  // }

  return (
    <>
      <section className="comments-head py-3" id="comments-text">
        <div className="container grid">
          <div>
            <h1 className="xl">Earthling Community</h1>
            <p className="lead">
              Leave a comment below letting use know how you made a difference
              using the RECYCLE PLUS + platform.
            </p>
          </div>
        </div>

        <div className="comments-main my-4" id="upcoming-events">
          <div className="card" id="upcomingeventscard">
            <h2 className="mono" id="greentitle">
              Upcoming Events
            </h2>
            <p>
              August 7th 2021: Pick It Up! - Volunteers are encouraged to pick
              up at least one piece of trash and recycle it if possible!
              <br></br>
              <br></br>
              March 22nd 2022: Habitat for Humanity - Volunteers will gather to
              remodel some houses for those in need.
              <br></br>
              <br></br>
              April 20th 2022: Earth Day - National Earth Day! Show how much you
              love your planet!
              <br></br>
              <br></br>
            </p>
          </div>

          <div className="card" id="contactuscard">
            <h2 id="greentitle">Contact US!</h2>
            <h6>Tell us about your upcoming events!</h6>
            <form method="get" action="/contactform">
              <button className="btn btn-primary" type="submit">
                Contact Us!
              </button>
            </form>
          </div>

          <div>
            <div
              className="comment comment-success text-center"
              id="community-section"
            >
              <Recycle color="green" size={50} />
              <div className="bi-recycle">
                Let Us Know How You GET YOUR RECYCLE ON!!
              </div>
              <br></br>
              <div>
                <Compose fetchComments={fetchComments} />
              </div>
              <br></br>
              <br></br>
              <div className="container">
                <h1 className="mono">Earthling Community</h1>
                <div className="row justify-content-center align-items-center">
                  {comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
        src="./smalllogo.png"
        id="nav-logo1"
        height="550px"
        width="770px"
      ></img>
    </>
  );
};

interface IHome {}

export default Home;
