import React, { Component } from "react";
import { Header, Results, Footer, Hero, SearchForm } from "./app/components";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header />
          <Hero />
          <SearchForm />
          <Results />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
