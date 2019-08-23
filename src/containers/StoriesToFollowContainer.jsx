import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Article from '../components/Article';
import { theme } from '../GlobalStyles';

const Container = styled.div`
  margin: 5vh 3vw 10vh 3vw;
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.medium}) {
    margin-bottom: 5vh;
  }
`;

const TitleContainer = styled.div`
  margin-left: 1rem;
  display: flex;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & > a {
    box-sizing: border-box;
    flex: 0 1 25%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    max-height: 100%;

    @media (max-width: ${theme.medium}) {
      flex: 0 1 50%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
`;

const Title = styled.h3`
  font-size: 3.5vw;

  @media (max-width: ${theme.medium}) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const StoriesToFollowContainer = (props) => {
  const { articles } = props;

  return (
    <Container>
      <TitleContainer>
        <Title>Stories To Follow</Title>
      </TitleContainer>
      <ArticleContainer>
        {articles.map((article) => (
          <Article
            link={article.link}
            photoUrl={article.photoUrl}
            headline={article.headline}
          />
        ))}
      </ArticleContainer>
    </Container>
  );
};

StoriesToFollowContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StoriesToFollowContainer;
