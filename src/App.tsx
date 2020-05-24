import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopPageWrapper from './components/TopPageWrapper';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
import { ThemeProvider as MuiThemeProvider} from '@material-ui/core';
import theme from './theme';
import { ThemeProvider as ScThemeProvider } from 'styled-components';

const store = createStore(rootReducer);
function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ScThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <TopPageWrapper />
          </div>
        </ScThemeProvider>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
