import React, { Component } from 'react';
import styled from 'styled-components';
import LinksList from '../components/LinksList';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const dataUrl = { name: 'places to hang out', url: '/dummyurl' };

const rightData = [
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
];
const leftData = [
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
];

const mapsTitle = 'MAPS';
const mapsDescription = 'explore places on and around campus';

const referralTitle = 'TEXTBOOKS';
const referralDescription = 'find great deals for freshmen textbooks';

export default class MapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          <LinksList
            leftList={leftData}
            rightList={rightData}
            title={mapsTitle}
            description={mapsDescription}
          />
          <LinksList
            leftList={leftData}
            rightList={rightData}
            title={referralTitle}
            description={referralDescription}
          />
        </Row>
      </div>
    );
  }
}
