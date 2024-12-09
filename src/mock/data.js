import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Jean Benedict C. Gaela | Web & Mobile Developer | DevOps", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Welcome to my portfolio", // e.g: Welcome to my website
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
  img: "gradPic3.jpg",
  paragraphOne: `Hi there! I'm Jean Benedict C. Gaela, a DevOps Engineer with a passion for building efficient, scalable solutions in the cloud and containerized environments. With expertise in Kubernetes, Red Hat OpenShift, Docker, and automation tools, I aim to streamline development and deployment processes.

  In this space, you'll find my professional journey, projects that showcase my skills, and insights into the tools and technologies I use to create impactful solutions. Whether you're here to learn more about my work, collaborate on a project, or just explore, I hope you find value and inspiration.

  Thanks for visiting, and feel free to reach out—I’d love to connect! `,
  paragraphTwo: ``,
  paragraphThree: "",
  resume: "", // if no resume, the button will not show up
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
    repo: 'https://github.com/jbgaela/EcommerceAppFrontEnd', 
  },
  {
    id: nanoid(),
    img: 'Screenshot_1.png',
    title: 'Covid 19 Tracker',
    info: 'A Covid 19 Tracker Made with Reactjs',
    info2: '',
    url: 'https://jbcovid19tracker.netlify.app/',
    repo: 'https://github.com/jbgaela/COVID-19-Tracker', 
  },
  {
    id: nanoid(),
    img: 'Screenshot_19.png',
    title: 'Meme Generator',
    info: 'A meme generator made with React native',
    info2: '',
    url: '#',
    repo: 'https://github.com/jbgaela/MemeGenerator', 
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
