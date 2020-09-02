import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const OuterContainer = styled.div`
  display: flex;
  width: 100%;
`;

const MobileContainer = styled.div`
  display: none;

  @media only screen and (max-width: ${(props) => props.theme.medium}) {
    display: block;
    min-width: 100%;
  }
`;

const DesktopContainer = styled.div`
  display: none;

  @media only screen and (min-width: ${(props) => props.theme.medium}) {
    display: block;
    min-width: 100%;
  }
`;

const Title = styled.h2`
  display: none;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;

const mobileimg = 'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3M5WSGYV7NEMVCJWW4I3I6QGTA.png';
const desktopimg = 'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/YMGAQK7NCFFIFL4OYEIDHZ6CTE.png';

const TextbooksContainer = (props) => {
  const { title } = props;
  return (
    <OuterContainer>
      <Title>{title}</Title>
      <MobileContainer>
        <Image src={mobileimg} />
      </MobileContainer>
      <DesktopContainer>
        <Image src={desktopimg} />
      </DesktopContainer>
    </OuterContainer>
  );
};

TextbooksContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TextbooksContainer;
