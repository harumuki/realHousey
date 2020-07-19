import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// import { HouseContext } from "./Context";
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

export default class App extends Component {
  // static contextType = HouseContext;
  render() {
    // let { houses } = this.context;

    // houses = houses.map((house) => {
    //   let usState = house.usState;
    //   let id = house.id;
    //   let type = house.type;
    //   let allPros = { usState, id, type };

    //   // console.log(usState);
    //   return (
    //     <Switch>
    //       <Route
    //         path={`/${usState}/houses/${type}-${id}`}
    //         component={SingleHouse}
    //       />
    //     </Switch>
    //   );
    // });
    // console.log(houses);

    /////////////

    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route exact path="/house" component={House} />
          <Route exact path="/rent" component={RentHouse} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/homeloans" component={HomeLoads} />
          <Route exact path="/agentfinder" component={AgentFinder} />
          <Route exact path="/houses/:slug" component={SingleHouse} />

          <Route exact component={Error} />
        </Switch>
      </div>
    );
  }
}

// export default App;
