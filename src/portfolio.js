// Website related settings
const settings = {
  isSplash: false, 
};

//SEO Related settings
const seo = {
  title: "Taqi's Portfolio",
  description:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  og: {
    title: "Mohammad Taqiuddin Portfolio"
  },
};

//Home Page
const greeting = {
  title: "Mohammad Taqiuddin",
  logo_name: "MohammadTaqiuddin",
  subTitle:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1mbCBWkoYZrX9GilWYGcXdNaHovPe8yia/view?usp=sharing",
  portfolio_repository: "https://github.com/Mohd-Taqiuddin/taqiPortfolio",
  githubProfile: "https://github.com/Mohd-Taqiuddin",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Mohd-Taqiuddin",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohammad-taqiuddin/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mohammadtaqiuddin.1@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mohammad_taqiuddin__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "python",
          imageSrc: "logo-python.svg"
        }
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "sql-database",
          imageSrc: "sqldatabase.svg"
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Mohd_Taqiuddin/",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Texas at Arlington",
      subtitle: "M.S. in Computer Science",
      logo_path: "uta_logo.jpg",
      alt_name: "UTA",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have studied advanced topics in software engineering subjects like DS, Algorithms, DBMS, CA, AI etc.",
        "⚡ Developed hands-on experience in coding, system design, and cloud technologies through projects and research.",
        "⚡ I achieved a 4 GPA and engaged in collaborative projects with diverse teams, enhancing problem-solving and communication skills.",
      ],
      website_link: "https://www.uta.edu/",
    },
    {
      title: "Osmania University",
      subtitle: "B.E. in Computer Science",
      logo_path: "osmania_logo.jpg",
      alt_name: "Osmania University",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Built a strong foundation in computer science principles, including data structures, databases, and networks.",
        "⚡ Applied theoretical knowledge in practical scenarios through coding labs, internships, and team projects.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development."
      ],
      website_link: "https://www.osmania.ac.in/",
    },
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  description:
    "I have worked with evolving startup as Full stack Developer, Designer and Software Architect.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
         {
          title: "Software Engineer",
          company: "Tmobile",
          company_url: "http://dealers.xtimobile.com/index.fwx",
          logo_path: "logokgc.png",
          duration: "Apr 2025 - Present",
          location: "Austin, TX, USA (Remote)",
          description:
            "Developed 10+ full-stack applications using Typescript for backend services and React for frontend, improving application performance by 30% through caching with Redis and asynchronous task handling via RabbitMQ. Contributed to 5 major code reviews using Git, incorporating feedback to enhance code quality and maintainability. Devised serverless microservices integrating AWS Lambda, S3, CloudWatch and API Gateway to improve applicationperformance and scalability.",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "Kgs Techology Group",
          company_url: "https://kgstechgroup.com/",
          logo_path: "logokgc.png",
          duration: "Jan 2024 - Apr 2025",
          location: "Alpharetta, GA, USA (Remote)",
          description:
            "I developed several Spring Boot apps, enhancing performance using Redis and Kafka. Automated CI/CD pipelines, built serverless microservices, and containerized apps with Docker and Kubernetes, improving efficiency and scalability.",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "NM Group",
          company_url: "https://www.linkedin.com/company/nmdev/",
          logo_path: "nm_logo.jpg",
          duration: "Jan 2021 - July 2022",
          location: "Hyderabad, Telangana, India (Remote)",
          description:
            "Increased system scalability using Node.js, led many projects with React/Redux and built several APIs, integrated third-party services, and improved system stability by a lot through efficient root cause analyses.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Gleam Technologies",
          company_url: "https://www.gleamtechnologies.com/",
          logo_path: "logo-gleam.png",
          duration: "Oct 2019 - Nov 2020",
          location: "Hyderabad, Telangana, India",
          description:
            "I optimized web scraping, improved system uptime, streamlined backend solutions with Python, and automated deployment pipelines using AWS, reducing development time and release cycles by 30%.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full stack web applications and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "taqi.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Android, Cloud and Opensource Development.",
  }
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
