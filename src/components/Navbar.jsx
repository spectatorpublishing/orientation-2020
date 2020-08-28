import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { Desktop, MobileAndTablet } from 'react-responsive-simple';
import { theme } from '../GlobalStyles';

const logoUrl = 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZKALKJLFQFECNGLNTICSJUMFF4.png';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: inline-row;
  overflow: visible;
  top: 20rem;
  height: 6vh;
  background: ${theme.navy};
  justify-content: space-between;
  align-items: center;
  color: ${theme.navy};

  & > :first-child {
    margin-left: 2vw;
  }

  & > :first-child {
    margin-left: 2vw;
  }

  @media (max-width: ${theme.large}) {
    display: flex;
    align-items: center;
    height: 60px;
    background: ${theme.yellow};
  }

  @media only screen and (max-height: ${theme.large}) {
    height: 60px;
  }
`;

const NavBarEntry = styled.div`
  text-align: center;
  @media (max-width: ${theme.large}) {
    margin-bottom: 2vh;
  }
`;

const NavBarText = styled.a`
  color: white !important;
  font-family: "HalloEuroboy", sans-serif;
  font-size: 1.3rem;

  @media (max-width: 1350px) {
    height: auto;
    padding-left: 1vw;
    padding-right: 1vw;
    line-height: 0.8;
  }
  @media (max-width: ${theme.large}) {
    padding-bottom: 4vh;
    font-size: 2rem;
  }
`;

const ColumbiaSpectatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.yellow};
  text-align: center;
  height: 100%;
  width: 10vw;
  @media (max-width: ${theme.large}) {
    margin-left: 0vw;
    width: 40vw;
  }
`;

const ColumbiaSpectator = styled.img`
  width: 80%;
  object-fit: contain;

  @media only screen and (max-height: ${theme.large}) {
    height: 60px;
  }
`;

const BurgerContainer = styled.div`
  display: flex;
  width: 100vw;
  align-items: flex-end;
`;

const Container = styled.div`
 position: sticky;
 top: 0px;
 z-index: 99999;
`;

const burgerStyle = {
  bmBurgerButton: {
    position: 'relative',
    width: '35px',
    height: '30px',
    left: '56vw',
    top: '0',
  },
  bmBurgerBars: {
    background: theme.navy,
  },
  bmMenu: {
    background: 'black',
    padding: '2.5em 1.5em 0',
    fontSize: '1.0em',
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
      menuOpen: false,
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  render() {
    const { entries } = this.props;
    const { menuOpen } = this.state;
    return (
      <Container>
        <Desktop>
          <NavBarContainer>
            {entries.map((entry) => {
              const linkUrL = entry.linkUrl;
              const { title } = entry;
              return (
                <NavBarEntry>
                  <NavBarText
                    href={linkUrL}
                    target="_blank"
                    rel="noopener noreferrer" // set to avoid potential data breach on the original page side;
                    // "noopener" denies access of the new page to the original,
                    // "noreferrer" prevents browser from sending original page address as referrer
                    style={{ textDecoration: 'none' }}
                  >
                    {title}
                  </NavBarText>
                </NavBarEntry>
              );
            })}
            <ColumbiaSpectatorContainer>
              <a
                href="https://www.columbiaspectator.com/"
                aria-label="image link"
              >
                <ColumbiaSpectator src={logoUrl} />
              </a>
            </ColumbiaSpectatorContainer>
          </NavBarContainer>
        </Desktop>

        <MobileAndTablet>
          <NavBarContainer>
            <ColumbiaSpectatorContainer>
              <ColumbiaSpectator src={logoUrl} />
            </ColumbiaSpectatorContainer>
            <BurgerContainer>
              <Menu
                right
                noOverlay
                width="250px"
                styles={burgerStyle}
                isOpen={menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
              >
                {entries.map((entry) => {
                  const linkUrL = entry.linkUrl;
                  const { title } = entry;
                  return (
                    <NavBarEntry>
                      <NavBarText
                        href={linkUrL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        {title}
                      </NavBarText>
                    </NavBarEntry>
                  );
                })}
              </Menu>
            </BurgerContainer>
          </NavBarContainer>
        </MobileAndTablet>
      </Container>
    );
  }
}

Navbar.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
};

Navbar.defaultProps = {
  entries: null,
};
