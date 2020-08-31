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
    title: 'PREPARE FOR COURSE REGISTRATION DOWNLOAD VERGIL+',
    url:
      'https://www.columbiaspectator.com/spectrum/2018/04/30/vergils-debut-how-to-make-registration-a-piece-of-cake/',
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
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Design',
    members: [
      'Michelle Shin, Design Editor',
      'Kelly Pu, Layout Deputy Editor',
      'Jason Kao, Eye Graphics Deputy Editor',
      'Helen Yang, Opinions Illustrations Deputy Editor',
      'Brenda Huang, Eye Illustrations Deputy Editor',
      'Tassneen Bashir, Animations Deputy Editor',
    ],
  },
  {
    title: 'News',
    members: [
      'Karen Xia, News Editor',
      'Valeria Escobar, Deputy News Editor',
      'Shubham Saharan, Senior Staff Writer',
      'Emma James, Senior Staff Writer',
      'Nelson Luna, Staff Writer',
    ],
  },
  {
    title: 'Opinion',
    members: [
      'Kaili Meier, Co-Editorial Page Editor',
      'Erin Neil, Co-Editorial Page Editor',
      'Kyra Dawkins, Deputy Editorial Page Editor',
    ],
  },
  {
    title: 'A&E',
    members: [
      'Sarah Beckley, A&E Editor',
      'Isabela Espadas Barros Leal, A&E Deputy Editor',
      'Sarah Robertson, A&E Deputy Editor',
      'Gia Kim, A&E Deputy Editor',
      'Fonda Shen, A&E Deputy Editor',
      'Samuel Jones, A&E Deputy Editor',
      'Alejandra Quintana, A&E Deputy Editor',
      'Abby Rooney, A&E Deputy Editor',
    ],
  },
  {
    title: 'Copy',
    members: [
      'Sarah Braka, Deputy Copy Editor',
      'Eden Teferi, Deputy Copy Editor',
      'María Thompson, Preslotter',
    ],
  },
  {
    title: 'Product',
    members: [
      'Arsalaan Ansari, Head of Engineering',
      'William Chiu, Engineering Manager',
      'Cecilia Orduña, Lead Product Designer',
      'Matthew Vanegas, Senior Developer',
      'Harrison Wang, Developer',
      'Elaine Wang, Developer',
      'Chenoa Gale, Developer',
    ],
  },
  {
    title: 'Engagement',
    members: [
      'Isabel Jauregui, Engagement Director',
      'Madison Harden, Senior Engagement Manager',
      'Hailey Shi, Engagement Manager',
      'Jake Fisher, Engagement Manager',
    ],
  },
  {
    title: 'Revenue',
    members: ['Sarah Peters, Sales Manager', 'Katrina Yin, Growth Manager'],
  },
  {
    title: 'Sports',
    members: ['Harry Walker, Staff Writer', 'Elizabeth Karpen, Staff Writer'],
  },
  {
    title: 'Spectrum',
    members: ['Grace Lin, Spectrum Editor'],
  },
  {
    title: 'Photo',
    members: ['Natalie Guerra, Photo Editor'],
  },
];

const StaffInfoMobile = [
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Design',
    members: [
      'Michelle Shin, Design Editor',
      'Kelly Pu, Layout Deputy Editor',
      'Jason Kao, Eye Graphics Deputy Editor',
      'Helen Yang, Opinions Illustrations Deputy Editor',
      'Brenda Huang, Eye Illustrations Deputy Editor',
      'Tassneen Bashir, Animations Deputy Editor',
    ],
  },

  {
    title: 'Opinion',
    members: [
      'Kaili Meier, Co-Editorial Page Editor',
      'Erin Neil, Co-Editorial Page Editor',
      'Kyra Dawkins, Deputy Editorial Page Editor',
    ],
  },
  {
    title: 'Revenue',
    members: ['Sarah Peters, Sales Manager', 'Katrina Yin, Growth Manager'],
  },
  {
    title: 'Product',
    members: [
      'Arsalaan Ansari, Head of Engineering',
      'William Chiu, Engineering Manager',
      'Cecilia Orduña, Lead Product Designer',
      'Matthew Vanegas, Senior Developer',
      'Harrison Wang, Developer',
      'Elaine Wang, Developer',
      'Chenoa Gale, Developer',
    ],
  },

  {
    title: 'Spectrum',
    members: ['Grace Lin, Spectrum Editor'],
  },
  {
    title: 'News',
    members: [
      'Karen Xia, News Editor',
      'Valeria Escobar, Deputy News Editor',
      'Shubham Saharan, Senior Staff Writer',
      'Emma James, Senior Staff Writer',
      'Nelson Luna, Staff Writer',
    ],
  },
  {
    title: 'A&E',
    members: [
      'Sarah Beckley, A&E Editor',
      'Isabela Espadas Barros Leal, A&E Deputy Editor',
      'Sarah Robertson, A&E Deputy Editor',
      'Gia Kim, A&E Deputy Editor',
      'Fonda Shen, A&E Deputy Editor',
      'Samuel Jones, A&E Deputy Editor',
      'Alejandra Quintana, A&E Deputy Editor',
      'Abby Rooney, A&E Deputy Editor',
    ],
  },
  {
    title: 'Copy',
    members: [
      'Sarah Braka, Deputy Copy Editor',
      'Eden Teferi, Deputy Copy Editor',
      'María Thompson, Preslotter',
    ],
  },
  {
    title: 'Sports',
    members: ['Harry Walker, Staff Writer', 'Elizabeth Karpen, Staff Writer'],
  },
  {
    title: 'Photo',
    members: ['Natalie Guerra, Photo Editor'],
  },
  {
    title: 'Engagement',
    members: [
      'Isabel Jauregui, Engagement Director',
      'Madison Harden, Senior Engagement Manager',
      'Hailey Shi, Engagement Manager',
      'Jake Fisher, Engagement Manager',
    ],
  },
];

const recognition = 'COVER ART BY: HELEN YANG WEBSITE DESIGN BY: CECILIA ORDUÑA DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, ELAINE WANG, BILL CHEN & CHENOA BUNTS-ANDERSON';

const getToKnowImage = {
  image:
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZNKTNLGKAFHUTFSIXC4HFO3OR4.jpeg',
};
const getToKnow = [
  {
    tab: 'BARNUMBIA',
    tabLink: '/orientation-2020/#/barnumbia',
  },
  {
    tab: 'CAMPUS LIFE',
    tabLink: '/orientation-2020/#/campus',
  },
  {
    tab: 'ACADEMICS',
    tabLink: '/orientation-2020/#/registration',
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
