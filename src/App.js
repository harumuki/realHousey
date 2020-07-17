import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import "./App.scss";
import NavBar from "./Components/Nav/NavBar";
import House from "./Pages/House/House";
import RentHouse from "./Pages/Rent House/RentHouse";
import Sell from "./Pages/sell/Sell";
import HomeLoads from "./Pages/Home Loans/HomeLoads";
import AgentFinder from "./Pages/Agent finder/AgentFinder";
import Error from "./Components/Error/Error";
import SingleHouse from "./Pages/SingleHouse/SingleHouse";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/house" component={House} />
        <Route path="/rent" component={RentHouse} />
        <Route path="/sell" component={Sell} />
        <Route path="/homeloans" component={HomeLoads} />
        <Route path="/agentfinder" component={AgentFinder} />
        <Route path="/Texas/houses/minature-3" component={SingleHouse} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
