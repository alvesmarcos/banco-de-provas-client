import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div
            style={{
              backgroundColor: "#FF5722",
              color: "#FFF",
              padding: "1%",
              textAlign: "center"
            }}
          >
          ® 2017
          </div>
        </footer>
      </div>
    );
  }
}
