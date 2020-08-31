import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Orientation from './containers/Orientation';
import Subpage from './containers/SubpageContainer';
import TextbooksContainer from './containers/TextbooksContainer';
import { GlobalStyles, theme } from './GlobalStyles';
import Navbar from './components/Navbar';
import BarnumbiaData from './data/BarnumbiaData';
import RegistrationData from './data/RegistrationData';
import CampusLifeData from './data/CampusLifeData';
import AcademicsData from './data/AcademicsData';
import StudentLifeData from './data/StudentLifeData';
import ZoomData from './data/ZoomData';

const navBarEntries = [
  {
    title: 'HOME',
    linkUrl: '/',
  },
  {
    title: 'ACADEMICS',
    linkUrl: '/academics',
  },
  {
    title: 'ZOOM UNIVERSITY',
    linkUrl: '/zoomuniversity',
  },
  {
    title: 'STUDENT LIFE',
    linkUrl: '/studentlife',
  },
  {
    title: '24 TRADITIONS',
    linkUrl:
      'https://www.columbiaspectator.com/orientation-2018/116-traditions/',
  },
  {
    title: 'JOIN SPEC',
    linkUrl: 'http://www.specpublishing.com/join',
  },
];
const home = () => <Orientation />;
const barnumbia = () => (
  <Subpage title="GET TO KNOW BARNUMBIA" data={BarnumbiaData} />
);
const academics = () => <Subpage title="ACADEMICS" data={AcademicsData} />;
const zoomuniversity = () => (
  <Subpage title="ZOOM UNIVERSITY" data={ZoomData} />
);

const studentlife = () => (
  <Subpage title="STUDENT LIFE" data={StudentLifeData} />
);

const course = () => (
  <Subpage title="COURSE REGISTRATION" data={RegistrationData} />
);

const campus = () => <Subpage title="CAMPUS LIFE" data={CampusLifeData} />;

const textbooks = () => <TextbooksContainer title="TEXTBOOK LINKS" />;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar entries={navBarEntries} />
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/barnumbia" component={barnumbia} />
          <Route exact path="/zoomuniversity" component={zoomuniversity} />
          <Route exact path="/academics" component={academics} />
          <Route exact path="/studentlife" component={studentlife} />
          <Route exact path="/registration" component={course} />
          <Route exact path="/campus" component={campus} />
          <Route exact path="/textbooks" component={textbooks} />
        </Switch>
      </>
    </ThemeProvider>
  );
}

export default App;
