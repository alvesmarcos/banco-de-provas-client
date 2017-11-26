import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Header, Results, Footer, Hero, SearchForm,Helper } from './app/components';
import reducers from './reducers';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

let store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div>
            <Header />
            <Hero />
            <Helper />
            {/* THIS MUST BE WRAPPED IN AN OUTER COMPONENT */}
            <SearchForm />
            <Results />
            {/* ***** */}
            <Footer />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
