import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/api/recycleCenters")
      .then((res) => res.json())
      .then((locations) => setLocations(locations))
      .catch((err) => console.error(err));
  }, []);


  return (
    <>
      <br></br>
      <h1 className="location-title">Locations</h1>
      <br></br>
      {/* MAP NEEDS TO BE HERE */}
      <div className="container-fluid text-center">
        <div className="locations-map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1K8VQjGrnIrzLlyvHcisdUVnJjG0NvMJ_"
            width="600"
            height="480"
          ></iframe>
        </div>
      </div>

      <div className="container">
        <br></br>
        <div className="row justify-content-around">
          {locations.map((locations) => (
            <div
              key={locations.id}
              className="card my-3"
              style={{ width: "24rem" }}
            >
              <div className="card-body">
                <h5 className="card-title" id="location-cardtitle">{locations.name}</h5>
                <br></br>
                <h6 className="card-subtitle mb-2">
                  Address: {locations.addr}
                </h6>
                <h6 className="card-subtitle mb-2">Hours: {locations.hours}</h6>
                {/* <h6 className="card-subtitle mb-2">
                  Materials Accepted: {locations.materials}
                </h6> */}
                <h6 className="card-subtitle mb-2">
                  County: {locations.county}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
