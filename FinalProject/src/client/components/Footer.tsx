import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <>
      {/* <div className="footer container grid grid-3 bg-success text-color-light"> */}
      <div className="footer grid grid-3">
        <div className="container-flex">
          {/* <h1>RECYCLE +</h1> */}
          {/* <p>Copyright &copy; 2021</p> */}
        {/* <nav>
          <ul>
          <li>
          <a href="/">Home</a>
          </li>
          <li>
          <a href="/locations">Locations</a>
          </li>
          <li>
          <a href="/comments">Community</a>
          </li>
          </ul>
        </nav> */}
        </div>
        <div className="social">
          <Facebook color="white" size={50} />
          <Instagram color="white" size={50} id="ig-icon"/>
          <Twitter color="white" size={50} />
        </div>
      </div>
    </>
  );};