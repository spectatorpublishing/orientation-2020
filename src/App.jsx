import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Orientation from './containers/Orientation';
import Subpage from './containers/SubpageContainer';
import { GlobalStyles, theme } from './GlobalStyles';
import Navbar from './components/Navbar';
import BarnumbiaData from './data/BarnumbiaData';

const navBarEntries = [
  {
    title: 'HOME',
    linkUrl: '/',
  },
  {
    title: 'CLUBS',
    linkUrl: '/',
  },
  {
    title: 'REGISTRATION',
    linkUrl: '/',
  },
  {
    title: 'GET TO KNOW BARNUMBIA',
    linkUrl: '/#/barnumbia',
  },
  {
    title: 'MAPS',
    linkUrl: '/',
  },
  {
    title: '116 TRADITIONS',
    linkUrl: '/',
  },
  {
    title: 'JOIN SPEC',
    linkUrl: '/',
  },
];
const home = () => <Orientation />;
const barnumbia = () => (
  <Subpage title="GET TO KNOW BARNUMBIA" data={BarnumbiaData} />
);
const course = () => (
  <Subpage title="COURSE REGISTRATION" data={BarnumbiaData} />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar entries={navBarEntries} />
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/barnumbia" component={barnumbia} />
          <Route exact path="/course" component={course} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
