import React from 'react';
import styled from 'styled-components';
import { Desktop } from 'react-responsive-simple';
import PropTypes from 'prop-types';
import Article from '../components/Article';

const OuterContainer = styled.div``;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin: 0vh 25vw;
`;

const Title = styled.h2`
  margin: 3vh 0vw 5vh 20vw;
`;

const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  & > a {
    box-sizing: border-box;
    flex: 1 1 33%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  &::after {
    content: "";
    flex: auto;
    width: 33vw;
  }
`;

const Subpage = (props) => {
  const { title, data } = props;
  return (
    <Desktop>
      <OuterContainer>
        <Title>{title}</Title>
        <InnerContainer>
          <SectionRow>
            {data.map((article) => (
              <Article
                link={article.link}
                photoUrl={article.photoUrl}
                photoAlt={article.photoAlt}
                headline={article.headline}
              />
            ))}
          </SectionRow>
        </InnerContainer>
      </OuterContainer>
    </Desktop>
  );
};

Subpage.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Subpage;
