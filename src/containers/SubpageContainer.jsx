import React from 'react';
import styled from 'styled-components';
import { Desktop } from 'react-responsive-simple';
import PropTypes from 'prop-types';
import StylizedArticle from '../components/StylizedArticle';
import { theme } from '../GlobalStyles';

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
    flex: 1 1 30%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${theme.large}) {
      flex: 1 1 50%;
    }
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
              <StylizedArticle
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
