import React, { useEffect, useState } from "react";
import { Dropdown } from "bootstrap";
import { Link } from "react-router-dom";

// const SearchBox = ({ placeholder }) => {
const SearchBox = () => {
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = () => {
    fetch("/api/materials")
      .then((res) => res.json())
      .then((material) => setMaterial(material))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="searchbox-form card text-center">
        <h2 className="mono">What and Where To Recycle!</h2>
        <br></br>

        <div className="search">
          <div className="searchInputs">
            {/* <input type="text" placeholder={placeholder}> */}

            <br></br>

            <div className="dropdown">
              <button id="homepage-button" className="btn btn-primary">Recycle it!</button>
              <div className="dropdown-content">
                {material.map(material => <Link to={`/locations/${material.id}`}>{material.name}</Link>)}
              </div>
            </div>

            <br></br>
            {/* <button type="submit" className="btn btn-primary" value="Recycle It!">
              Recycle It!
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
  };

export default SearchBox;



{/* 
                <label htmlFor="materials">Choose a Material to Recycle:</label>
                <select name="materials" id="materials">
                  <option value="plastic1" >Plastics 1 + 2</option>
                  <option value="plastic2">Plastics 3 - 7</option>
                  <option value="glass">Glass</option>
                  <option value="aluminum">Aluminium Cans</option>
                  <option value="scrap">Scrap Metal</option>
                  <option value="batteries">Batteries</option>
                  <option value="electronics">Electronics</option>
                  <option value="paper">Mixed Papers</option>
                </select>
              </form> */}
          //   </div>
          //   <div className="dataResult"></div>
          // </div> */}
            {/* <Link to="/locations/2">Mixed Papers</Link>
                <Link to="/locations/3">Metal Food Cans</Link>
                <Link to="/locations/4">Plastics</Link>
                <Link to="/locations/5">Batteries</Link>
                <Link to="/locations/6">Scrap Metal</Link>
                <Link to="/locations/7">Glass</Link>
                <Link to="/locations/8">Electronics</Link>
                <Link to="/locations/9">Cork</Link>
                <Link to="/locations/10">Clothing/Textiles</Link> */}
