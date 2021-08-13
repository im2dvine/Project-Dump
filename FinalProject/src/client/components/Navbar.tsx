import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <h1 id="RecyclePlus"className="logo">
            <img
              src="./whitelogo.png"
              id="nav-logo"
              height="85rem"
              width="120rem"
            ></img>{" "}
            RECYCLE +
          </h1>
        </Link>
        <div>
          <nav id="page-links">
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
          </nav>
        </div>
      </div>
    </>
  );
}





{/* <>
  <div className="navbar">
    <img
      src="./whitelogo.png"
      id="nav-logo"
      height="85rem"
      width="105rem"
    ></img>
    <div className="container flex" id="navigation">
      <Link to="/">
        <h1 className="logo">RECYCLE +</h1>
      </Link>

      <nav id="page-links">
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
      </nav>
    </div>
  </div>
</>; */}
