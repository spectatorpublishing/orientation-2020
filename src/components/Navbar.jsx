import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: inline-row;
  height: 6vh;
  width: 100vw;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    height: 60px;
    width: 100vw;
  }
`;

const NavBarEntry = styled.div`
  text-align: center;
`;

const NavBarText = styled.div`
  font-size: 1.3rem;
  color: white;
  font-weight: 700;
  @media (max-width: 992px) {
    font-size: 1.3rem;
    color: white;
    font-weight: 700;
    padding-bottom: 2vh;
  }
`;

const ColumbiaSpectator = styled.div``;

const BurgerContainer = styled.div`
  display: flex;
  width: 100vw;
  align-items: flex-end;
`;

const burgerStyle = {
  bmBurgerButton: {
    position: 'relative',
    width: '35px',
    height: '30px',
    left: '85vw',
    top: '0',
  },
  bmBurgerBars: {
    background: 'red',
  },
  bmMenu: {
    background: 'black',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmCross: {
    background: 'white',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
  bmMenuWrap: {
    position: 'fixed',
    top: '0',
  },
};

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };
    this.checkWindow = this.checkWindow.bind(this);
  }

  componentDidMount() {
    this.checkWindow();
    window.addEventListener('resize', this.checkWindow);
  }

  checkWindow = () => {
    this.setState({ isDesktop: window.innerWidth > 992 });
  };

  render() {
    const { isDesktop } = this.state;
    const { entries } = this.props;
    return (
      <div>
        {isDesktop ? (
          <NavBarContainer>
            {entries.map((entry) => {
              const linkUrL = `#${entry}`;
              return (
                <NavBarEntry>
                  <Link smooth to={linkUrL} style={{ textDecoration: 'none' }}>
                    <NavBarText>{entry}</NavBarText>
                  </Link>
                </NavBarEntry>
              );
            })}
            <ColumbiaSpectator>*insert the logo here*</ColumbiaSpectator>
          </NavBarContainer>
        ) : (
          <NavBarContainer>
            <BurgerContainer>
              <Menu right noOverlay width="250px" styles={burgerStyle}>
                {entries.map((entry) => {
                  const linkUrL = `#${entry}`;
                  return (
                    <NavBarEntry>
                      <Link
                        smooth
                        to={linkUrL}
                        style={{ textDecoration: 'none', color: 'white' }}
                      >
                        <NavBarText>{entry}</NavBarText>
                      </Link>
                    </NavBarEntry>
                  );
                })}
              </Menu>
            </BurgerContainer>
          </NavBarContainer>
        )}
      </div>
    );
  }
}

Navbar.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string),
};

Navbar.defaultProps = {
  entries: null,
};
