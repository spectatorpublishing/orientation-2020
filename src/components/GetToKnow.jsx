import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Container = styled.div`
  width: 100%;
  height: 15%;
  background-color: grey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-image: url(${(props) => props.backgroundImage.image});
`;

const Column = styled.div`
  max-width: 50%;
  height: 100%;
`;

const Title = styled.div`
  margin-bottom: 50%;
  margin-top: 20%;
  font: 170% arial, sans-serif;
  color: black;
  text-shadow: -1px 3px white;
  font-weight: bold;
`;

const GetToKnow = (props) => {
  const { backgroundImage, getToKnow } = props;
  const Buttons = getToKnow.map((Hmm) => <Button getToKnow={Hmm} />);
  return (
    <Container backgroundImage={backgroundImage}>
      <Column>
        <Title>GET TO KNOW</Title>
      </Column>
      <Column>{Buttons}</Column>
    </Container>
  );
};
export default GetToKnow;

GetToKnow.propTypes = {
  getToKnow: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};
