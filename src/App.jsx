import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Orientation from './containers/Orientation';
import { GlobalStyles, theme } from './GlobalStyles';
import Navbar from './components/Navbar';

const navBarEntries = [
  'HOME',
  'CLUBS',
  'REGISTRATION',
  'GET TO KNOW BARNUMBIA',
  'MAPS',
  '116 TRADITIONS',
  'JOIN SPEC',
];
const home = () => <Orientation />;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar entries={navBarEntries} />
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
        <Orientation />
      </div>
    </ThemeProvider>
  );
}

export default App;
