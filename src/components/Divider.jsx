import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background: #ffc2b3;
  display: flex;
  margin-top: 4vw;
  margin-bottom: 4vw;
`;
const LeftDiv = styled.div`
  flex: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const RightDiv = styled.div`
  flex: 60%;
  margin: 0.4rem;
  margin-left: 0;
`;
const Title = styled.h3`
  color: #104a4f;
  text-align: right;
  font-size: 4.2vw;
`;

const Body = styled.div`
  text-align: left;
  height: 100%;
  padding: 1rem;
  padding-right: 4rem;
  line-height: 0.75rem;
`;

const BodyText = styled.p`
  font-size: 0.9vw;
  color: #104a4f;
  display: inline;
  font-weight: 600;
`;

const Anchor = styled.a`
  font-style: italic;
  color: inherit;
`;

const Divider = (props) => {
  const { title, body, link } = props;
  const defaultBody = (
    <>
      <BodyText>
        This website was created entirely by our tech and design teams here at
        Spectator. Curious to see how it&apos;s done?
      </BodyText>
      <br />
      <BodyText>Interested in doing this work yourself? </BodyText>
      <br />
      <BodyText>
        <Anchor href={link}>Click here</Anchor>
        <BodyText> to learn how to join our team</BodyText>
      </BodyText>
    </>
  );
  return (
    <Container>
      <LeftDiv>
        <Title>{title}</Title>
      </LeftDiv>
      <RightDiv>
        <Body>{body || defaultBody}</Body>
      </RightDiv>
    </Container>
  );
};

Divider.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Divider;
