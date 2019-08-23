import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import BannerRow from './BannerRow';
import StaffContainer from './StaffContainer';
import DiscourseContainer from './DiscourseContainer';
import Navbar from '../components/Navbar';
import Article from '../components/Article';

const tocEntries = [
  'Campus Life',
  'Academics',
  'Courses We Loved',
  '116 Things to do before Graduating',
  'Get Your Textbooks',
  'Maps',
  'Stories To Follow',
  'Join the Discourse',
  'Spectator Staff',
];

const BannerRowDemo = [
  {
    title: 'COURSES WE LOVED',
    url: 'https://www.columbiaspectator.com/',
  },
  {
    title: 'PREPARE FOR COURSE REGISTRATION DOWNLOAD VERGIL+',
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
    title: 'Arts & Entertainment',
    members: [
      'Sarah Beckley, A&E Editor',
      'Gia Kim, A&E Deputy Editor',
      'Isabela Espadas Barros Leal, A&E Deputy Editor',
      'Fonda Shen, A&E Deputy Editor',
      'Samuel Jones, A&E Deputy Editor',
      'Alejandra Quintana, A&E Deputy Editor',
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
    title: 'Arts & Entertainment',
    members: [
      'Sarah Beckley, A&E Editor',
      'Gia Kim, A&E Deputy Editor',
      'Isabela Espadas Barros Leal, A&E Deputy Editor',
      'Fonda Shen, A&E Deputy Editor',
      'Samuel Jones, A&E Deputy Editor',
      'Alejandra Quintana, A&E Deputy Editor',
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

const navBarEntries = [
  'HOME',
  'CLUBS',
  'REGISTRATION',
  'GET TO KNOW BARNUMBIA',
  'MAPS',
  '116 TRADITIONS',
  'JOIN SPEC',
];

const Orientation = () => (
  <div>
    <Navbar entries={navBarEntries} />
    <WelcomeContainer id="welcome" tocEntries={tocEntries} />
    <BannerRow buttons={BannerRowDemo} mobileButtons={MobileBannerRowDemo} />
    <DiscourseContainer>
      <Article
        link="https://www.columbiaspectator.com/sports/2019/08/17/football-kicks-off-season-at-ivy-league-media-day-hosted-by-espn/"
        photoUrl="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2ZOZLPVQ4NC5VOBUIY3HGTJDHU.jpg"
        headline="Football kicks off season at Ivy League Media Day hosted by ESPN"
      />
      <Article
        link="https://www.columbiaspectator.com/sports/2019/08/17/football-kicks-off-season-at-ivy-league-media-day-hosted-by-espn/"
        photoUrl="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2ZOZLPVQ4NC5VOBUIY3HGTJDHU.jpg"
        headline="Football kicks off season at Ivy League Media Day hosted by ESPN"
      />
      <Article
        link="https://www.columbiaspectator.com/sports/2019/08/17/football-kicks-off-season-at-ivy-league-media-day-hosted-by-espn/"
        photoUrl="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2ZOZLPVQ4NC5VOBUIY3HGTJDHU.jpg"
        headline="Football kicks off season at Ivy League Media Day hosted by ESPN"
      />
      <Article
        link="https://www.columbiaspectator.com/sports/2019/08/17/football-kicks-off-season-at-ivy-league-media-day-hosted-by-espn/"
        photoUrl="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2ZOZLPVQ4NC5VOBUIY3HGTJDHU.jpg"
        headline="Football kicks off season at Ivy League Media Day hosted by ESPN"
      />
    </DiscourseContainer>
    <StaffContainer staffInfo={StaffInfo} staffInfoMobile={StaffInfoMobile} />
  </div>
);

export default Orientation;
