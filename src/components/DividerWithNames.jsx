import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background: #8e8ebd;
  display: flex;
  padding-top: 2.4vw;
  padding-bottom: 2.4vw;
  max-height: 100%;
  max-width: 100%;
`;
const LeftDiv = styled.div`
  flex: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;
`;

const RightDiv = styled.div`
  flex: 35%;
  margin: 0.4rem;
  margin-right: 2rem;
`;
const Title = styled.h3`
  flex: 50%;
  color: #09093b;
  font-size: 4.2vw;
`;

const Body = styled.div`
  flex: 50%;
  height: 100%;
  line-height: 1.3rem;
`;

const BodyText = styled.p`
  font-size: 1.5vw;
  color: #09093b;
  display: inline;
  font-weight: 500;
`;

const Anchor = styled.a`
  font-style: italic;
  color: inherit;
`;

const NameText = styled.p`
  color: #09093b;
  font-weight: 700;
  font-size: 1.5vw;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.5rem;
`;
const DividerWithNames = (props) => {
  const {
    title, body, link, recognition,
  } = props;
  const defaultBody = (
    <>
      <BodyText>
        This website was created entirely by our tech and design teams here at
        Spectator.
      </BodyText>
      <br />
      <BodyText>
        urious to see how it&apos;s done? Interested in doing this work
        yourself?
      </BodyText>
      <br />
      <BodyText>
        <Anchor href={link}>Click here</Anchor>
        <BodyText> to learn how to join our team</BodyText>
      </BodyText>
    </>
  );
  const bodyToShow = body || defaultBody;
  return (
    <Container>
      <LeftDiv>
        <Title>{title}</Title>
        <Body>{bodyToShow}</Body>
      </LeftDiv>
      <RightDiv>
        <div>
          <NameText>{recognition}</NameText>
        </div>
      </RightDiv>
    </Container>
  );
};
DividerWithNames.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  recognition: PropTypes.string.isRequired,
};
export default DividerWithNames;
