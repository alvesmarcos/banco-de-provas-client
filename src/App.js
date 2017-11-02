import React, { Component } from "react";
import { Header, Results, Footer } from "./app/components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          {/* TODO Encapsular em um unico elemento */}
        <Header />
        <div style ={{
            margin: "30%"
        }} >
          <Results />
        </div>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
