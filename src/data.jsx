import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/go-cart.jpg';
import Work2 from './assets/social-media.jpg';
import Work3 from './assets/hotel-management.jpg';
import Work4 from './assets/chat-app.jpg';
import Work5 from './assets/curd-operation.jpg';
import Work6 from './assets/Ai-bard.jpg';
import Work7 from './assets/react-todo.jpg';
import Work8 from './assets/netflix.jpg';
import Work9 from './assets/react-text-util.jpg';
import Work10 from './assets/react-ox.jpg';
import Work11 from './assets/react-temp.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';
import todo from './assets/download.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Kirtan',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Patel',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Anand, Gujarat, INDIA',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+917984484483',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'kirtanpatel6189@mail.com',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Gujarati, Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: '12+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '97+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023/July - PRESENT',
    title: 'Web Developer - ETech',
    desc: 'I have been working in Etech International Consultancy Pvt. Ltd. as Developer, currently I am at learning phase.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023/Jan - June',
    title: 'Web Developer - ETech ',
    desc: 'As a web developer, I had been worked in Etech International Consultancy Pvt. Ltd. for 5 months as an Intern.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2023',
    title: 'Engineering Degree (BTech)',
    desc: 'I have completed my Bachelor degree from Madhuben and Bhanubhai Patel Institute of technology in Information technology, secured 7.72 CGPA. ',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'Higher Secondary Education',
    desc: 'I have carried out my Higher secondary from H M Patel English Medium School at Dharmaj.',
  },

];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: 'https://www.shareicon.net/data/512x512/2015/09/04/95596_html_512x512.png',
  },

  {
    id: 2,
    title: 'Css',
    percentage: 'https://www.shareicon.net/data/128x128/2015/09/08/97876_css_512x512.png',
  },

  {
    id: 3,
    title: 'JavaScript',
    percentage: 'https://www.shareicon.net/data/128x128/2016/07/06/106573_software_512x512.png',
  },

  {
    id: 4,
    title: 'React.JS',
    percentage: 'https://www.shareicon.net/data/128x128/2016/07/08/117367_logo_512x512.png',
  },

  {
    id: 5,
    title: 'Node.JS',
    percentage: 'https://www.shareicon.net/data/128x128/2015/10/06/112727_development_512x512.png',
  },

  {
    id: 6,
    title: 'Express.JS',
    percentage: 'https://www.nextontop.com/assets/img/services/web/expressjs.svg',
  },

  {
    id: 7,
    title: 'MongoBD',
    percentage: 'https://www.shareicon.net/data/128x128/2015/10/06/112729_development_512x512.png',
  },

  {
    id: 8,
    title: 'React-Native',
    percentage: 'https://www.shareicon.net/data/128x128/2016/07/08/117367_logo_512x512.png',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Shopping Application',
    type:"Full Stack",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Go-Cart',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/GO-CART',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, Node, Express, MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://go-cart-pink.vercel.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Social Media Application',
    type:"Full Stack",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'S.P.E.C.T.R.U.M',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/SOCIAL-MEDIA',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, Node, Express, MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://social-media-ebon-rho.vercel.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Hotel Booking App',
    type:"Full Stack",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Room-Hunt',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/MERN-BOOKING-APP-USER',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, Node, Express, MongoDB',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Chat Application',
    type:"Full Stack",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Chat Application',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/MERN-CHAT-APP-FRONTEND',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, Node, Express',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://kirtanp04-chat-app.netlify.app/',
      },
    ],
  },

  {
    id: 6,
    img: Work5,
    title: 'CURD Operation',
    type:"Full Stack",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'CURD',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/MERN-CURD-OPERATION',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, Node, Express, Mongodb',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://kirtanp04-curd.netlify.app/',
      },
    ],
  },

  {
    id: 7,
    img: Work6,
    title: 'Chat-GPT API',
    type:"Frontend",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Bard AI',
      },
      {
        icon: <FiUser />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/REACT-AI-BOARD',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://kirtan-ai.netlify.app/',
      },
    ],
  },

  {
    id: 8,
    img: "https://i.pinimg.com/originals/26/99/81/2699815cc29b5b98a544f87ef54fa192.png",
    title: 'News Aplication',
    type:"Frontend",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'ABP News',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/NEWS-APP-REACT',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.JS',
      },
    ],
  },

  {
    id: 9,
    img: todo,
    title: 'TO-DO App',
    type:"Mobile app",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'To-Do',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/REACT-NATIVE-TODO-APP',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React-Native',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://expo.dev/artifacts/eas/8heRUPAFRMmz29QNw5JgvZ.apk',
      },
    ],
  },

  {
    id: 10,
    img: "https://techigem.com/wp-content/uploads/2019/04/Top-10-Best-Hotel-Booking-Apps-Android-2019-1.jpg",
    title: 'Booking App',
    type:"Mobile app",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Hunt-Rooms',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/MOBILE-BOOKING-APP',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React-Native, Node, Express, Mongodb',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '----',
      },
    ],
  },

  {
    id: 11,
    img: Work8,
    title: 'Netflix clone',
    type:"Frontend",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Netflix',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/NETFLIX-APP',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://netflix-app-kirtanp04.vercel.app/',
      },
    ],
  },

  {
    id: 12,
    img: Work7,
    title: 'TO-DO App',
    type:"Frontend",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'To-Do',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/TODO-LIST',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://todo-kirtanp04-2001.netlify.app/',
      },
    ],
  },

  {
    id: 13,
    img: "https://s3-alpha.figma.com/hub/file/1045847374/ae76ee66-07fc-4247-8a04-882781d5b799-cover.png",
    title: 'Weather App',
    type:"Mobile app",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Weather',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/REACT-NATIVE-WEATHER-APP',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React-Native',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://expo.dev/artifacts/eas/kHebFEC1i4CJ5vmYYCCYMo.apk',
      },
    ],
  },

  {
    id: 14,
    img: Work9,
    title: 'Text-Utile',
    type:"Frontend",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Text-Util',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/TEXT-UTIL',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://textutil-kirtanp04-2001.netlify.app/',
      },
    ],
  },

  {
    id: 15,
    img: Work10,
    title: 'Tic-Tac-Toe',
    type:"Frontend",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'OX',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/TIC-TAC-TOE',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://tictactoe-kirtanp04-2001.netlify.app/',
      },
    ],
  },

  {
    id: 16,
    img: Work11,
    title: 'Weather App',
    type:"Frontend",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Weather',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'https://github.com/kirtanp04/Temperature-API',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://temperature-kirtanp04-2001.netlify.app/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
