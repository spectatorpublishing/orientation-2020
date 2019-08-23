import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Mobile, ResponsiveComponent } from 'react-responsive-simple';
import SectionTitle from '../components/SectionTitle';

const DesktopAndTablet = (props) => {
  const { children } = props;
  return <ResponsiveComponent min={768}>{children}</ResponsiveComponent>;
};

DesktopAndTablet.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #106e75;
  align-items: center;
  padding: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.mobile ? 'stretch' : 'flex-start')};
  justify-content: ${(props) => (props.mobile ? 'space-around' : 'center')};
  margin: 5vh 5vw 0vh 5vw;
  flex-wrap: wrap;
  width: ${(props) => (props.mobile ? '100%' : 'auto')};

  &::after {
    content: "";
    flex: auto;
    width: 52vw;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 30%;
  text-align: center;
`;

const TitleContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
`;

const StaffContainer = (props) => {
  const { staffInfo } = props;

  return (
    <div>
      <Mobile>
        <Container>
          <Row>
            <TitleContainer>
              <Title>Staff</Title>
            </TitleContainer>
          </Row>
          <SectionRow mobile>
            <Col>
              {staffInfo
                .slice(0, Math.floor(staffInfo.length / 2))
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
            <Col>
              {staffInfo
                .slice(Math.floor(staffInfo.length / 2), staffInfo.length)
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
          </SectionRow>
        </Container>
      </Mobile>

      <DesktopAndTablet>
        <Container>
          <Row>
            <TitleContainer>
              <Title>Staff</Title>
            </TitleContainer>
          </Row>
          <SectionRow>
            {staffInfo.map((info) => (
              <SectionTitle title={info.title} members={info.members} />
            ))}
          </SectionRow>
        </Container>
      </DesktopAndTablet>
    </div>
  );
};

StaffContainer.propTypes = {
  staffInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StaffContainer;
