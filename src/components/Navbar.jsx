import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: inline-row;
  height: 6vh;
  width: 100vw;
  justify-content: space-evenly;
  background-color: black;
`;

const NavBarEntry = styled.div`
  padding-top: 1.6vh;
`;

const NavBarText = {
  textDecoration: 'none',
  color: 'white',
};

const ColumbiaSpectator = styled.div``;

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { entries } = this.props;
    return (
      <NavBarContainer>
        {entries.map((entry) => {
          const linkUrL = `#${entry}`;
          return (
            <NavBarEntry>
              <Link smooth to={linkUrL} style={NavBarText}>
                <h3 style={{ color: 'white' }}>{entry}</h3>
              </Link>
            </NavBarEntry>
          );
        })}
        <ColumbiaSpectator>*insert the logo here*</ColumbiaSpectator>
      </NavBarContainer>
    );
  }
}

Navbar.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string),
};

Navbar.defaultProps = {
  entries: null,
};
