import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../Styles/Home.css";

export class QuickSearches extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mb-5">
          <div className="quick-searches mt-5 ms-4">Quick Searches</div>
          <div className="qs-subtitle mt-3 ms-4">
            Discover restaurants by type of meal
          </div>
          <div className="row mt-3">
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img alt="breakfast"
                    src={require('../Assets/breakfast.jpg')}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title">Breakfast</div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img alt="lunch"
                    src={require('../Assets/lunch.jpg')}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title">Lunch</div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img alt="snacks"
                    src={require('../Assets/snacks.png')}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title">Snacks</div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img alt="dinner"
                    src={require('../Assets/dinner.png')}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title">Dinner</div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img alt="drinks"
                    src={require('../Assets/drinks.png')}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title">Drinks</div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img alt="nightlife"
                    src={require('../Assets/nightlife.png')}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title">Night Life</div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(QuickSearches);
