import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-content: space-evenly;
  justify-content: center;
  border-radius: 3px;
  padding: 0.1rem;
  margin: 1rem;
  outline: 0.2rem solid red;
  outline-offset: 1rem 5rem;
  text-decoration: none;
  transform: translate(-15%, 25%);
`;

const Inner = styled.div`
  padding: 0.4rem;
  :hover {
    background-color: lightblue;
  }
  background-color: white;
  transform: translate(15%, -25%);
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
