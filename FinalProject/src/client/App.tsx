import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/app";
// import './scss/index'; only using temporary style sheet ftm! ^
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Comments from "./pages/Comments";
import Edit from "./components/Edit";
import ContactForm from "./components/ContactForm";
import LocationsMaterials from "./components/LocationsMaterials";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/locations/:id">
          <LocationsMaterials />
        </Route>
        <Route exact path="/locations">
          <Locations />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/contactform">
          <ContactForm />
        </Route>
        <Route exact path="/edit/:id">
          <Edit />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );

  // async componentDidMount() {
  // 	try {

  // 	} catch (error) {
  // 		console.log(error);
  // 	}
  // }
}

interface IAppProps {}

interface IAppState {
  recycleCenters: Array<{
    name: string;
    address: string;
    hours: string;
    id: number;
    countyid: number;
  }>;
}

{
  /* <main className="container my-5">
				<h1 className="text-primary text-center">Recycle Centers</h1>
				<ul className="list-group">
					{this.state.recycleCenters.map(recycleCenter => {
						return <li className="list-group-item">{recycleCenter.name}</li>
					})}
				</ul>
			</main> */
}

// let r = await fetch('/api/recycleCenters');
// let recycleCenters = await r.json();
// this.setState({ recycleCenters });

 {/* <Route exact path="/locations/:locationid">
            <LocationId />
          </Route> */}

             {/* <Route exact path="/locations/plastic">
          <LocationsPlastic />
        </Route>
        <Route exact path="/locations/electronics">
          <LocationsElectronics />
        </Route>
        <Route exact path="/locations/aluminum">
          <LocationsAluminum />
        </Route>
        <Route exact path="/locations/paper">
          <LocationsPaper />
        </Route>
        <Route exact path="/locations/metalfoodcans">
          <LocationsMetalCans />
        </Route>
        <Route exact path="/locations/batteries">
          <LocationsBatteries />
        </Route>
        <Route exact path="/locations/scrapmetal">
          <LocationsScrapMetal />
        </Route>
        <Route exact path="/locations/glass">
          <LocationsGlass />
        </Route>
        <Route exact path="/locations/cork">
          <LocationsCork />
        </Route>
        <Route exact path="/locations/clothingtextiles">
          <LocationsClothing />
        </Route> */}