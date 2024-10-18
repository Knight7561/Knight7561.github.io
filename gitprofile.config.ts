// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'knight7561', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ["Knight7561/WeatherApp","Knight7561/linkedIn_auto_jobs_applier_with_AI"], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Rohith Venkata Reddy',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'rohithvr3',
    twitter: 'octolearn',
    mastodon: 'distributedTerminal@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'rohithvr3',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://knight7561.github.io',
    phone: '',
    email: 'rohithvr3@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/uc?export=download&id=1Bg29oa3xOEQLps1_5Vt72jfOh9aNBb4j', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Tensorflow',
    'SQL',
    'Git',
    'Docker',
    'NLTK',
    'SpaCy',
    'LangChain',
    'Pandas',
    'RAG'
  ],
  experiences: [
    {
      company: 'Acunor',
      position: 'AI Engineer',
      from: 'May 2024',
      to: 'September 2024',
      companyLink: 'https://www.acunor.com',
    },
    {
      company: 'Cyberinfrastructure for Network Science (CNS) Center',
      position: 'Software Developer, Data',
      from: 'May 2022',
      to: 'September 2023',
      companyLink: 'https://cns.iu.edu/home.html',
    },
    {
      company: 'NEC',
      position: 'Software Developer, ML',
      from: 'Aug 2019',
      to: 'Juky 2021',
      companyLink: 'https://in.nec.com',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Machine Learning - Specialty',
      body: 'Amazon Web Services - MLS-C01',
      year: 'January 2024',
      link: 'https://www.credly.com/badges/f6b504e7-89ee-4689-bcd2-aead62d82932/public_url',
    },
    {
      name: 'Databricks Certified Data Engineer Associate',
      body: 'Databricks',
      year: 'December 2023',
      link: 'https://credentials.databricks.com/ad5ce0c6-5b35-4589-9312-27a12ad8468e',
    },
    {
      name: 'Google Data Analytics Specialization',
      body: 'Google',
      year: 'January 2022',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/5AFRK8EF3BNZ',
    },


  ],
  educations: [
    {
      institution: 'Indiana University Bloomington',
      degree: 'Master of Science in Data Science',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Visvesvaraya Technological University',
      degree: 'Undergraduate - Bachelor in Computer Science and Engineering',
      from: '2016',
      to: '2020',
    },
  ],
  publications: [
    {
      title: 'Recommendation and Product Analyzer System for E-Commerce',
      conferenceName: '',
      journalName: 'International Research Journal of Engineering and Technology (IRJET) ',
      authors: 'Ramya Shree B, Nama Venkata Naga Sukesh, V.R Rohith, Pranav N Rao, Sajitha N',
      link: 'https://www.irjet.net/archives/V7/i6/IRJET-V7I6584.pdf',
      description:
        'The recommendation system derives a relationship between the products and users to help them to select the most appropriate product and make user decision process faster. This is achieved by using collaborative filtering. This system builds a model that enhances the seller experience by providing the positive and negative reviews given by user directly using sentimental analyzer which makes use of LSTM model for sentiment analysis for better results.',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'rohithvr3', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href=""
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> (Major credits) and ❤️.
    <a
      class="text-primary" href="https://sites.google.com/view/rohithvenkatareddy#h.m2wub9pekwzn"
      target="_blank"
      rel="noreferrer"
    >Meet me here</a>`,

  enablePWA: true,
};

export default CONFIG;
