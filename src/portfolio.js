

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Mouhib Trabelsi",
  title: "Hi, I'm Mouhib",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Firebase and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IO9V3WAfoOVk08c1WEcI0De806dPLVuD/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mouhibb",
  linkedin: "https://www.linkedin.com/in/mouhib-trabelsi/",
  gmail: "trabelsi.mouhib3@gmail.com",
  gitlab: "https://gitlab.com/Mouhibb1",
  facebook: "https://www.facebook.com/Mouhib.trabelsi13",
  medium: "https://medium.com/@Mouhibb",
  stackoverflow: "https://stackoverflow.com/users/11097845/mouhib-trabelsi",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: emoji("What I do 💻"),
  subTitle: "Curious FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Develop highly scalable Back end APIs"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Cloudinary / Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java/J2EE",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Higher Institute of Computer Science ISI",
      logo: require("./assets/images/isi.webp"),
      subHeader: "Licence degree in Computer Science",
      duration: "october 2018 - june  2021",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, ...",
    },
    {
      schoolName: "Medjez Technical high school",
      logo: require("./assets/images/lycee.webp"),
      subHeader: "Baccalaureate of technical Science ",
      duration: "june 2017",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer intern",
      company: "Silver International",
      companylogo: require("./assets/images/silver.webp"),
      date: "Feb 2021 – Mai 2021",
      desc: "Developing an Online shopping center (Mall) that allow businesses and individuals to promote their products and services.",
      descBullets: [
        "Used technologies : React, Redux, Nodejs, Express, MongoDB"
      ]
    },
    {
      role: "Front-End Developer intern",
      company: "Inetum",
      companylogo: require("./assets/images/inetum.webp"),
      date: "Sep 2020 – Nov 2020",
      desc: "Worked on developing the front end of the Ministry of Vocational Training and Employment website.",
      descBullets: [
        "Used technologies : React, Redux, Material UI, Gitflow"
      ]
      
    },
    {
      role: "Full-Time Freelancer",
      company: "Freeways",
      companylogo: require("./assets/images/freeways.webp"),
      date: "Sep 2019 – Feb 2020",
      desc: "Worked on freelance projects for tunisian clients and international clients."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Big Projects 🚀"),
  subtitle: "SOME OF MY PROJECTS",
  projects: [
    {
      image: require("./assets/images/5.webp"),
      projectName: "",
      projectDesc: "Ministry of Vocational Training and Employment",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.emploi.gov.tn/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/6.webp"),
      projectDesc: "Online Shopping Mall",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ecommerce-mall.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/7.webp"),
      projectDesc: "E-commerce Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shoplt.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/8.webp"),
      projectDesc: "Pizza Restaurant Website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pizza-slice-d0cb1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Hash code Participation",
      subtitle:
        "Ranked 100 among 1200 student worldwide.",
      image: require("./assets/images/hash-code.webp"),
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0dB7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?resourcekey=0-LxDyvvv5tLhJFn1ycKxqlg"
        },
        {
          name: "Hash Code Blog",
          url: "https://codingcompetitions.withgoogle.com/hashcode/"
        }
      ]
    },
    {
      title: "Microsoft MTA",
      subtitle:
        "MTA Certification for database fundamentals.",
      image: require("./assets/images/MTA.webp"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1-ZHYZA1bYsXZ1TCLtIWVK_bwCZsHOWNU/view?usp=sharing"
        }
      ]
    },

    {
      title: "FullStack Development",
      subtitle: "Fullstack Development Certifcation",
      image: require("./assets/images/coursera.webp"),
      footerLink: [
        {name: "View Certificate", url: "https://drive.google.com/file/d/1aoYNSSPkgD4bOXYJEhpPhf1iqkHq6yxs/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: emoji("📱 +216 27 534 464"),
  email_address: emoji("📧 trabelsi.mouhib3@gmail.com")
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with  twitter username  
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
