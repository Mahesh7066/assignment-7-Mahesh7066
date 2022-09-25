import React, { Component } from "react";
import { Tabs, TabPanel , Tab, TabList} from 'react-tabs'
import '../Styles/Details.css'

class Details extends Component {
  render() {
    return (
      <div className="mb-5">
        <div className="filter-header">
          <div className="filter-logo-div mx-5">
            <span className="filter-logo">e!</span>
          </div>
        </div>
        <div className="px-5">
          <img
            src={require("../Assets/breakfast.jpg")}
            height="352px"
          />
          <button class="gallery-button py-2">
            Click to see Image Gallery
          </button>
        </div>

        <div className="px-5 pt-5">
          <div class="h1 mt-3">
            The Big Chill Cakery
            <button className="btn btn-danger btn">Place Online Order</button>
          </div>
          <div class="tabs">
            <Tabs>
              <TabList className="TabList">
                <Tab>Overview</Tab>
                <Tab>Contact</Tab>
              </TabList>
              <hr className="tabline" />
              <TabPanel className="Details">
                <h2 class="about">About the place</h2>
                <h4 class="head">Cuisine</h4>
                <h6 class="value">Fast Food</h6>
                <h4 class="head">Average Cost</h4>
                <h6 class="value">&#8377; 700</h6>
              </TabPanel>
              <TabPanel>
                <h4 class="head">Phone Number</h4>
                <h6 class="value">+91-9876543217</h6>
                <h4 class="head">The Big Chill Cakery</h4>
                <h6 class="value">Shalimar Bagh, Delhi</h6>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
