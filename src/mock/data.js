import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jean Benedict C. Gaela Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jean Benedict Gaela',
  subtitle: 'Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'gradPic3.jpg',
  paragraphOne: `A Software Engineer with 2 years of experience
  in Web & Mobile development and hands on
  experience with architecting/automating mission critical deployments in infrastructure. Proficient with configuration management
  tools, and in developing CI/CD pipelines. `,
  paragraphTwo: ``,
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Screenshot_2.png',
    title: 'Ecommerce App',
    info: 'An ecommerce App made in Reactjs, Nodejs, and MongoDB',
    info2: '',
    url: '#',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot_1.png',
    title: 'Covid 19 Tracker',
    info: 'A Covid 19 Tracker Made with Reactjs',
    info2: '',
    url: 'https://jbcovid19tracker.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot_19.png',
    title: 'Meme Generator',
    info: 'A meme generator made with React native',
    info2: '',
    url: '#',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'jbgaela@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/JhayyyyBeeee',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/JhayyyyBeeee',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jbgaela',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jbgaela',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
