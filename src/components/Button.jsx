import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.a`
  position: relative;
  display: block;
  margin: 1rem;
  text-decoration: none;
  text-transform: uppercase;
`;

const Inner = styled.div`
  padding: 0.4rem 0.8rem;
  position: relative;
  :hover {
    transform: translate(5%, -5%);
  }
  background-color: white;
  color: #f57869;
  font-weight: bold;
  font-size: 2rem;
  display: inline-block;
  :before {
    display: inline-block;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border: 2px solid #ec7100;
    left: -0.4rem;
    top: 0.2rem;
  }
  :after {
    content: "";
    position: absolute;
    display: inline-block;
    top: 50%;
    height: 2px;
    width: 500%;
    background: #ec7100;
    left: 100%;
  }
`;

const Buttons = (props) => {
  const {
    getToKnow: { tab, tabLink },
  } = props;
  return (
    <Button href={tabLink} prefetch>
      <Inner>{tab}</Inner>
    </Button>
  );
};

export default Buttons;

Buttons.propTypes = {
  getToKnow: PropTypes.string,
};

Buttons.defaultProps = {
  getToKnow: 'error',
};
