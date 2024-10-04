// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'bimasenaputra', // Your GitHub org/user name. (This is the only required config)
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
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'bimasenaputra/mag-bert-arl', 
          'bimasenaputra/flask-pdf-docx-converter-service', 
          'bimasenaputra/snippetbox',
          'bimasenaputra/search-engine',
          'bimasenaputra/slu-auth-gateway',
          'bimasenaputra/blog-frontend'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Bimasena Putra',
    description: 'List of Bimasena Putra\'s Contacts, Projects, Articles, and Publications',
    imageURL: '',
  },
  social: {
    linkedin: 'bimasena',
    twitter: '',
    mastodon: '',
    researchGate: 'Bimasena-Putra',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'bimasenaputra',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://bimasenaputra.github.io',
    phone: '',
    email: 'bimasenaputra@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python', 'Go', 'Bash', 'SQL', 'Java', 'Javascript', 'HTML', 'CSS', 'PyTorch', 'Tensorflow', 'HuggingFace', 'Spring Framework', 'Django', 'Vue', 'React',
    'Git', 'Docker', 'Google Cloud Platform (GCP)', 'Redis', 'Terraform', 'Chef', 'MongoDB', 'Grafana', 'ElasticSearch'
  ],
  experiences: [
    {
      company: 'Japan Advanced Institute of Science and Technology',
      position: 'AI Research Intern',
      from: 'November 2023',
      to: 'March 2024',
      companyLink: 'https://www.jaist.ac.jp/english/',
    },
    {
      company: 'Klinik Pintar',
      position: 'Frontend Engineer Intern',
      from: 'September 2023',
      to: 'November 2023',
      companyLink: 'https://klinikpintar.id/',
    },
    {
      company: 'Gojek (GoTo Group)',
      position: 'Software Engineer Intern',
      from: 'February 2023',
      to: 'August 2023',
      companyLink: 'https://www.gojek.com/',
    },
    {
      company: 'Sagara Technology',
      position: 'Backend Engineer Intern',
      from: 'June 2022',
      to: 'September 2022',
      companyLink: 'https://sagaratechnology.com/',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'University of Indonesia',
      degree: 'Bachelor\'s Degree',
      from: '2020',
      to: '2024',
    },
  ],
  publications: [
    {
      title: 'MAG-BERT-ARL for Fair Automated Video Interview Assessment',
      conferenceName: '',
      journalName: 'IEEE Access',
      authors: 'Bimasena Putra, Kurniawati Azizah, Candy Olivia Mawalim, Ikhlasul Akmal Hanif, Sakriani Sakti, Chee Wee Long, Shogo Okada',
      link: 'https://doi.org/10.1109/ACCESS.2024.3473314',
      description:
        'Fair Automated Video Interview Assessment without Sensitive Attributes',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'bimasenaputra', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-8B4G93R092', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

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
  footer: `Made with ❤️`,

  enablePWA: true,
};

export default CONFIG;
