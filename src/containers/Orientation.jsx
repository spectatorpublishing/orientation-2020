import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import BannerRow from './BannerRow';
import StaffContainer from './StaffContainer';
import DiscourseContainer from './DiscourseContainer';
import Article from '../components/Article';
import Divider from '../components/Divider';
import DividerWithNames from '../components/DividerWithNames';
import GetToKnow from '../components/GetToKnow';
import Carousel from '../components/Carousel';
import JoinTheDiscourseData from '../data/JoinTheDiscourseData';
import MapsContainer from './MapsContainer';
import { theme } from '../GlobalStyles';

const tocEntries = [
  {
    title: 'campus life',
    id: 'gettoknow',
  },
  {
    title: 'academics',
    id: 'gettoknow',
  },
  {
    title: 'courses we loved',
    id: 'banner',
  },
  {
    title: '24 traditions for the class of 2024',
    id: 'banner',
  },
  {
    title: 'textbooks',
    id: 'banner',
  },
  {
    title: 'maps',
    id: 'maps',
  },
  {
    title: 'stories to follow',
    id: 'stories',
  },
  {
    title: 'join the discourse',
    id: 'discourse',
  },
  {
    title: 'spectator staff',
    id: 'staff',
  },
  // {
  //   title: 'print issue',
  //   id: 'print',
  // },
];

const BannerRowDemo = [
  {
    title: 'COURSES WE LOVED',
    url:
      'https://www.columbiaspectator.com/spectrum/2019/08/22/courses-we-loved-staff-picks-for-2019/',
    color: theme.purple,
    shadowColor: theme.orange,
  },
  {
    title: 'SIGN UP FOR THE WAKE UP CALL, OUR DAILY NEWSLETTER',
    url:
      'https://columbiaspectator.us4.list-manage.com/subscribe?u=a3d2eeb1ae5560ca04f82f042&id=e51c51d62d',
    color: theme.orange,
    shadowColor: theme.orange,
  },
  {
    title: '24 TRADITIONS FOR THE CLASS OF 2024',
    url: 'https://www.columbiaspectator.com/orientation-2018/116-traditions/',
    color: theme.yellow,
    shadowColor: theme.orange,
  },
  {
    title: 'GET TEXTBOOKS',
    url: '/orientation-2020/#/textbooks',
    color: theme.navy,
    shadowColor: theme.orange,
  },
];

const MobileBannerRowDemo = [
  {
    title: 'COURSES WE LOVED',
    url:
      'https://www.columbiaspectator.com/spectrum/2019/08/22/courses-we-loved-staff-picks-for-2019/',
    color: theme.purple,
  },
  {
    title: 'DOWNLOAD VERGIL+',
    url:
      'https://www.columbiaspectator.com/spectrum/2018/04/30/vergils-debut-how-to-make-registration-a-piece-of-cake/',

    color: theme.orange,
  },
  {
    title: '116 THINGS TO DO BEFORE GRADUATING',
    url: 'https://www.columbiaspectator.com/orientation-2018/116-traditions/',
    color: theme.yellow,
  },
  {
    title: 'GET YOUR TEXTBOOKS',
    url: '/orientation-2020/#/textbooks',
    color: theme.navy,
  },
  {
    title: 'MAPS',
    url: 'https://www.columbiaspectator.com/orientation-2018/campus-maps/',
    color: theme.purple,
  },
];

const StaffInfo = [
  {
    title: 'Corporate Board',
    members: [
      'Karen Xia, Editor in Chief',
      'Shubham Saharan, Managing Editor',
      'Isabel Jauregui, Publisher',
    ],
  },
  {
    title: 'Illustrations',
    members: [
      'Helen Yang, Illustrations Editor',
      'Raymond Banke, Illustrations Deputy',
      'Brenda Huang, Illustrations Deputy',
      'Tassneen Bashir, Illustrations Deputy',
    ],
  },
  {
    title: 'Graphics',
    members: [
      'Raeedah Wahid, Graphics Editor',
      'Jason Kao, Graphics Deputy Editor',
      'Charlotte Li, Graphics Deputy Editor',
      'JessiCa Li, Graphics Deputy Editor',
      'Jun Yi Zhang, Graphics Deputy Editor',
    ],
  },
  {
    title: 'Opinion',
    members: [
      'Tamarah Wallace, Editorial Page Editor',
      'Hsin Yen Huang, Deputy Editorial Page Editor',
      'Changu Chiimbwe, Deputy Editorial Page Editor',
      'Karlton Gaskin, Deputy Editorial Page Editor',
      'Lily Nathanson, Deputy Editorial Page Editor',
      'Ryan Oden, Deputy Editorial Page Editor',
    ],
  },
  {
    title: 'Revenue',
    members: [
      'Sarah Peters, Revenue Director',
      'Sophia Qureshi, Sales Manager',
      'Joy Fan, Sales Manager',
    ],
  },
  {
    title: 'Product',
    members: [
      'David Wang, Head of Product',
      'McKenna Gillard, Engineering Manager',
    ],
  },
  {
    title: 'Copy',
    members: [
      'Sarah Braka, Head Copy Editor',
      'Eden Teferi, Deputy Copy Editor',
      'Anna Chavez, Deputy Copy Editor',
      'Joyce Liu, Deputy Copy Editor',
      'Julianne Kim, Deputy Copy Editor',
      'Emma Bradbury, Deputy Copy Editor',
    ],
  },
  {
    title: 'News',
    members: [
      'Valeria Escobar, News Editor',
      'Stephanie Lai, News Editor',
      'Sofia Partida, Deputy News Editor',
    ],
  },
  {
    title: 'A&E',
    members: [
      'Abby Rooney, A&E Editor',
      'Olivia Doyle, A&E Deputy Editor',
      'Katie Levine, A&E Deputy Editor',
      'Noah Sheidlower, A&E Deputy Editor',
      'Nigel Telman, A&E Deputy Editor',
    ],
  },
  {
    title: 'Spectrum',
    members: ['Jazilah Salam, Spectrum Deputy'],
  },
  {
    title: 'Sports',
    members: [
      'Lizzie Karpen, Sports Editor',
      'Clara Ence Morse Karpen, Deputy Editor',
      'Mackenzie George, Deputy Editor',
    ],
  },
  {
    title: 'Photo',
    members: [
      'Lila Gaffney, News Photo Deputy',
      'Beatrice Shlansky, A&E Photo Deputy',
      'Amelia Milne, Eye Photo Deputy',
      'Sarah Jayne Austin, Sports Photo Deputy',
    ],
  },
  {
    title: 'Engagement',
    members: [
      'Evan Kong , Engagement Manager',
      'Jake Fisher, Engagement Manager',
    ],
  },
];

const StaffInfoMobile = [
  {
    title: 'Corporate Board',
    members: [
      'Karen Xia, Editor in Chief',
      'Shubham Saharan, Managing Editor',
      'Isabel Jauregui, Publisher',
    ],
  },
  {
    title: 'Illustrations',
    members: [
      'Helen Yang, Illustrations Editor',
      'Raymond Banke, Illustrations Deputy',
      'Brenda Huang, Illustrations Deputy',
      'Tassneen Bashir, Illustrations Deputy',
    ],
  },
  {
    title: 'Graphics',
    members: [
      'Raeedah Wahid, Graphics Editor',
      'Jason Kao, Graphics Deputy Editor',
      'Charlotte Li, Graphics Deputy Editor',
      'JessiCa Li, Graphics Deputy Editor',
      'Jun Yi Zhang, Graphics Deputy Editor',
    ],
  },
  {
    title: 'Opinion',
    members: [
      'Tamarah Wallace, Editorial Page Editor',
      'Hsin Yen Huang, Deputy Editorial Page Editor',
      'Changu Chiimbwe, Deputy Editorial Page Editor',
      'Karlton Gaskin, Deputy Editorial Page Editor',
      'Lily Nathanson, Deputy Editorial Page Editor',
      'Ryan Oden, Deputy Editorial Page Editor',
    ],
  },
  {
    title: 'Product',
    members: [
      'David Wang, Head of Product',
      'McKenna Gillard, Engineering Manager',
    ],
  },
  {
    title: 'Photo',
    members: [
      'Lila Gaffney, News Photo Deputy',
      'Beatrice Shlansky, A&E Photo Deputy',
      'Amelia Milne, Eye Photo Deputy',
      'Sarah Jayne Austin, Sports Photo Deputy',
    ],
  },
  {
    title: 'Spectrum',
    members: ['Jazilah Salam, Spectrum Deputy'],
  },
  {
    title: 'News',
    members: [
      'Valeria Escobar, News Editor',
      'Stephanie Lai, News Editor',
      'Sofia Partida, Deputy News Editor',
    ],
  },
  {
    title: 'A&E',
    members: [
      'Abby Rooney, A&E Editor',
      'Olivia Doyle, A&E Deputy Editor',
      'Katie Levine, A&E Deputy Editor',
      'Noah Sheidlower, A&E Deputy Editor',
      'Nigel Telman, A&E Deputy Editor',
    ],
  },
  {
    title: 'Copy',
    members: [
      'Sarah Braka, Head Copy Editor',
      'Eden Teferi, Deputy Copy Editor',
      'Anna Chavez, Deputy Copy Editor',
      'Joyce Liu, Deputy Copy Editor',
      'Julianne Kim, Deputy Copy Editor',
      'Emma Bradbury, Deputy Copy Editor',
    ],
  },
  {
    title: 'Sports',
    members: [
      'Lizzie Karpen, Sports Editor',
      'Clara Ence Morse Karpen, Deputy Editor',
      'Mackenzie George, Deputy Editor',
    ],
  },
  {
    title: 'Revenue',
    members: ['Sarah Peters, Revenue Director'],
  },
  {
    title: 'Engagement',
    members: [
      'Evan Kong , Engagement Manager',
      'Jake Fisher, Engagement Manager',
    ],
  },
];

const recognition = 'COVER ART BY: BRENDA HUANG WEBSITE DESIGN BY: CECILIA ORDUÑA DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, ELAINE WANG, BILL CHEN & CHENOA BUNTS-ANDERSON';

const getToKnowImage = {
  image:
    'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/J5EV3DNOP5ASRE66X44U2PHWKU.png',
};
const getToKnow = [
  {
    tab: 'ZOOM UNIVERSITY',
    tabLink: '/orientation-2020/#/zoomuniversity',
  },
  {
    tab: 'STUDENT LIFE',
    tabLink: '/orientation-2020/#/studentlife',
  },
  {
    tab: 'ACADEMICS',
    tabLink: '/orientation-2020/#/academics',
  },
];

const storiesToFollowArticles = [
  [
    {
      href: 1,
      link:
        'https://www.columbiaspectator.com/news/2020/07/12/students-have-been-just-as-good-as-the-police-at-enforcing-the-legacy-of-enslavement-that-would-finance-and-expand-columbias-prestige/',
      photoUrl:
        'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TCFXOGSTV5ACTISGYNI7O7JVZI.jpg',
      photoAlt: 'police',
      headline:
        'Students have been “just as good as the police” at enforcing the legacy of enslavement that would finance and expand Columbia’s prestige',
    },
    {
      href: 2,
      link:
        'https://www.columbiaspectator.com/news/2020/04/02/college-students-have-been-misrepresented-in-the-census-columbia-and-the-government-are-trying-to-change-that/',
      photoUrl:
        'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/77UPXLTAYVADRI26EC2MSDD4TI.gif',
      photoAlt: 'Low Steps',
      headline:
        'College students have been misrepresented in the census. Columbia and the government are trying to change that.',
    },
    {
      href: 3,
      link:
        'https://www.columbiaspectator.com/news/2020/03/13/upscaled-the-cost-of-columbia-construction-for-struggling-12th-avenue-businesses/',
      photoUrl:
        'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/L4Y6D2SPSVEA5O76U44RQE74RU.jpg',
      photoAlt: 'Construction',
      headline:
        'Upscaled: The cost of Columbia construction for struggling 12th Avenue businessess',
    },
    {
      href: 4,
      link:
        'https://www.columbiaspectator.com/eye-lead/2020/05/15/uncertainty-looms-as-student-jobs-are-disappearing-during-the-great-lockdown/',
      photoUrl:
        'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MJQEFP4WVNASVES4BCIJCHKZKM.gif',
      photoAlt: 'Graphic',
      headline:
        'Uncertainty Looms as Student Jobs are Disappearing During the Great Lockdown',
    },
  ],
  [
    {
      href: 5,
      link:
        'https://www.columbiaspectator.com/sports/2020/07/08/ivy-league-cancels-all-fall-sports-will-revisit-athletics-in-january-2021/',
      photoUrl:
        'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MQHLKEY4KJHYRJLRNST6YKCI4Q.jpg',
      photoAlt: 'Football',
      headline:
        'Ivy League cancels all fall sports, will revisit athletics in January 2021',
    },
    {
      href: 6,
      link:
        'https://www.columbiaspectator.com/the-eye/2020/05/26/graduate-workers-went-on-strike-without-union-authorization-what-will-that-mean-for-the-future-of-labor-organizing/',
      photoUrl:
        'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/NFNRVDYCGJDWRMF7B4Q3FTYWQE.jpg',
      photoAlt: 'Low Steps',
      headline:
        'Graduate Workers Went on Strike Without Union Authorization. What Will That Mean for The Future of Labor Organizing?',
    },
    {
      href: 7,
      link:
        'https://www.columbiaspectator.com/the-eye/2020/04/10/at-zoom-university-crepe-making-photoshop-sets-and-virtual-backgrounds-keep-us-connected/',
      photoUrl:
        'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MYPTC4R7DRD3TN45YZAK3YALEI.jpg',
      photoAlt: 'Illustration',
      headline:
        'At Zoom University, Crepe-Making, Photoshop Sets, and Virtual Backgrounds Keep Us Connected.',
    },
  ],
];

const Orientation = () => (
  <div>
    <WelcomeContainer id="welcome" tocEntries={tocEntries} />
    <Divider
      title="LIKE WHAT YOU SEE?"
      body={false}
      link="http://www.specpublishing.com/join"
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
    <MapsContainer />
    <Carousel id="stories" slides={storiesToFollowArticles} />
    <DiscourseContainer id="discourse">
      {JoinTheDiscourseData.map((entry) => (
        <Article
          link={entry.link}
          photoUrl={entry.photoUrl}
          headline={entry.headline}
          linkColor={theme.orange}
        />
      ))}
    </DiscourseContainer>
    <DividerWithNames
      title="LIKE WHAT YOU SEE?"
      body={false}
      link="http://www.specpublishing.com/join"
      recognition={recognition}
    />
    <StaffContainer
      id="staff"
      staffInfo={StaffInfo}
      staffInfoMobile={StaffInfoMobile}
    />
  </div>
);

export default Orientation;
