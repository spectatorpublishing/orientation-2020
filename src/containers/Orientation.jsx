import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import BannerRow from './BannerRow';
import StaffContainer from './StaffContainer';
import DiscourseContainer from './DiscourseContainer';
import Article from '../components/Article';
import Divider from '../components/Divider';
import DividerWithNames from '../components/DividerWithNames';
import GetToKnow from '../components/GetToKnow';
import JoinTheDiscourseData from '../data/JoinTheDiscourseData';

const tocEntries = [
  {
    title: 'Campus Life',
    id: 'gettoknow',
  },
  {
    title: 'Academics',
    id: 'gettoknow',
  },
  {
    title: 'Courses We Loved',
    id: 'banner',
  },
  {
    title: '116 Things to do before Graduating',
    id: 'banner',
  },
  {
    title: 'Required Reading',
    id: 'banner',
  },
  {
    title: 'Maps',
    id: 'maps',
  },
  {
    title: 'Stories to Follow',
    id: 'stories',
  },
  {
    title: 'Join the Discourse',
    id: 'discourse',
  },
  {
    title: 'Spectator Staff',
    id: 'staff',
  },
];

const BannerRowDemo = [
  {
    title: 'COURSES WE LOVED',
    url:
      'https://www.columbiaspectator.com/spectrum/2019/08/22/courses-we-loved-staff-picks-for-2019/',
  },
  {
    title: 'PREPARE FOR COURSE REGISTRATION DOWNLOAD VERGIL+',
    url:
      'https://www.columbiaspectator.com/spectrum/2018/04/30/vergils-debut-how-to-make-registration-a-piece-of-cake/',
    color: '#174d5b',
  },
  {
    title: '116 THINGS TO DO BEFORE GRADUATING',
    url: 'https://www.columbiaspectator.com/orientation-2018/116-traditions/',
    color: '#f26d5b',
    shadowColor: '#f1bc9c',
  },
  {
    title: 'REQUIRED READING',
    url: 'https://www.columbiaspectator.com/spectrum/required-reading/',
    color: '#9BDAE3',
  },
];

const MobileBannerRowDemo = [
  {
    title: 'COURSES WE LOVED',
    url: 'https://www.columbiaspectator.com/',
  },
  {
    title: 'DOWNLOAD VERGIL+',
    url: 'https://www.columbiaspectator.com/',
    color: '#174d5b',
  },
  {
    title: '116 THINGS TO DO BEFORE GRADUATING',
    url: 'https://www.columbiaspectator.com/',
    color: '#f26d5b',
    shadowColor: '#f1bc9c',
  },
  {
    title: 'GET YOUR TEXTBOOKS',
    url: 'https://www.columbiaspectator.com/',
    color: '#9BDAE3',
  },
];

const StaffInfo = [
  {
    title: 'Art & Entertainment',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Product',
    members: [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  },
  {
    title: 'Product',
    members: [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Product',
    members: [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Product',
    members: [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  },
  {
    title: 'Product',
    members: [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
];

const recognition = 'COVER ART BY: JOURNALISM DESIGNER WEBSITE DESIGN BY: CECILIA ORDUÑA DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, HARRISON WANG, BILL CHEN & CHENOA BUNTS-ANDERSON';

const getToKnowImage = {
  image:
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZNKTNLGKAFHUTFSIXC4HFO3OR4.jpeg',
};
const getToKnow = [
  {
    tab: 'BARNUMBIA',
    tabLink: '/#/barnumbia',
  },
  {
    tab: 'CAMPUS LIFE',
    tabLink: '/#/campus',
  },
  {
    tab: 'ACADEMICS',
    tabLink: '/#/registration',
  },
];

const Orientation = () => (
  <div>
    <WelcomeContainer id="welcome" tocEntries={tocEntries} />
    <Divider
      title="LIKE WHAT YOU SEE?"
      body={false}
      link="//columbiaspectator.com"
    />
    <GetToKnow
      id="gettoknow"
      getToKnow={getToKnow}
      backgroundImage={getToKnowImage}
    />
    <BannerRow
      id="banner"
      buttons={BannerRowDemo}
      mobileButtons={MobileBannerRowDemo}
    />
    <DiscourseContainer id="discourse">
      {JoinTheDiscourseData.map((entry) => (
        <Article
          link={entry.link}
          photoUrl={entry.photoUrl}
          headline={entry.headline}
        />
      ))}
    </DiscourseContainer>
    <DividerWithNames
      title="LIKE WHAT YOU SEE?"
      body={false}
      link="//columbiaspectator.com"
      recognition={recognition}
    />
    <StaffContainer id="staff" staffInfo={StaffInfo} />
  </div>
);

export default Orientation;
