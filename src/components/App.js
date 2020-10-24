import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const locationList = [
      {
        key: "location1",
        city: "Goa"
      },
      {
        key: "location2",
        city: "Darjeeling"
      },
      {
        key: "location3",
        city: "Lonavala"
      }
    ];
    return (
      <>
        <ol>
          {locationList.map((locationList) => (
            <li key={locationList.key}>{locationList.city}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
