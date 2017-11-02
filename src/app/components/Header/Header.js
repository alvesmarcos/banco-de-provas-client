import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <AppBar
            style={{
              backgroundColor: "#FF5722"
            }}
            title="Banco de Provas da UFPB"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </header>
      </div>
    );
  }
}
