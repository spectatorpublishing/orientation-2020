import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-image: url(${(props) => props.backgroundImage.image});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50% 85%;
  padding: 3vw;
  position: relative;
  overflow: hidden;
`;

const Column = styled.div`
  float: right;
`;

const Title = styled.h2`
  margin-left: 4vw;
  text-shadow: -1px 3px white;
  font-weight: bold;
  color: #e27400;
  margin-top: 1rem;
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
