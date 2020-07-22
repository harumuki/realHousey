import React, { Component } from "react";
import items from "./data";

const HouseContext = React.createContext();

class HouseProvider extends Component {
  state = {
    houses: [],
    sortedHouses: [],
    featuredHouses: [],
    loading: true,
    type: "all",
    usState: "all",
    priceNum: 0,
    minPriceNum: 0,
    maxPriceNum: 0,
    beds: 1,
    baths: 1,
    minSqftNum: 0,
    maxSqftNum: 0,
  };

  componentDidMount() {
    let houses = this.formatData(items);
    let featuredHouses = houses.filter((house) => house.featured === true);
    let maxPriceNum = Math.max(...houses.map((item) => item.priceNum));
    let maxSqftNum = Math.max(...houses.map((item) => item.SqftNum));

    this.setState({
      houses,
      featuredHouses,
      sortedHouses: houses,
      loading: false,
      priceNum: maxPriceNum,
      maxPriceNum,
      maxSqftNum,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let house = { ...item.fields, images, id };
      return house;
    });
    return tempItems;
  }

  getHouse = (slug) => {
    let tempHouses = [...this.state.houses];
    const house = tempHouses.find((house) => house.slug === slug);
    return house;
  };

  // If you don't have a chackbox
  // handleChange = (event) => {
  //   const type = event.target.type;
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   console.log(`type: ${type}, name: ${name}, value: ${value}`);
  // };

  // If there is gonna be a chackbox
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterHouses
    );
  };

  filterHouses = () => {
    let {
      houses,
      type,
      usState,
      priceNum,
      beds,
      baths,
      minSqftNum,
      maxSqftNum,
    } = this.state;

    // All the houses
    let tempHouses = [...houses];
    // Transform value
    beds = parseInt(beds);
    baths = parseInt(baths);
    priceNum = parseInt(priceNum);
    // SqftNum = parseInt(SqftNum);

    // filter by type
    if (type !== "all") {
      tempHouses = tempHouses.filter((house) => house.type === type);
    }

    // filter by usState
    if (usState !== "all") {
      tempHouses = tempHouses.filter((house) => house.usState === usState);
    }

    // filter by beds
    if (beds !== 1) {
      tempHouses = tempHouses.filter((house) => house.beds >= beds);
    }

    // filter by baths
    if (baths !== 1) {
      tempHouses = tempHouses.filter((house) => house.baths >= baths);
    }

    // filter by priceNum
    tempHouses = tempHouses.filter((house) => house.priceNum <= priceNum);

    // filter by SqftNum
    tempHouses = tempHouses.filter(
      (house) => house.SqftNum >= minSqftNum && house.SqftNum <= maxSqftNum
    );

    // Change State
    this.setState({
      sortedHouses: tempHouses,
    });
  };

  render() {
    return (
      <HouseContext.Provider
        value={{
          ...this.state,
          getHouse: this.getHouse,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </HouseContext.Provider>
    );
  }
}

const HouseConsumer = HouseContext.Consumer;

export function withHouseConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <HouseConsumer>
        {(value) => <Component {...props} context={value} />}
      </HouseConsumer>
    );
  };
}

export { HouseProvider, HouseConsumer, HouseContext };
