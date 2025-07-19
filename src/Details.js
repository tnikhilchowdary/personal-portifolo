// ✅ Fixed Details.js with corrected syntax
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import TypeScript from "./assets/techstack/Typescript.svg.png";
import NodeJS from "./assets/techstack/Node.js.png";
import mongodb from "./assets/techstack/MongoDB.png";
import sql from "./assets/techstack/sql.png";
import visualstudio from "./assets/techstack/visualstudio.png";
import Express from "./assets/techstack/Express.png";
import RestApi from "./assets/techstack/rest-api.png";

// Project Images
import projectImage1 from "./assets/projects/project1.png"
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Personal Details
export const personalDetails = {
  name: "Nikhil Chowdary Thummalapalli",
  tagline: "I build things for web",
  img: profile,
  about: "I'm Nikhil, a frontend developer skilled in React and backend development with Node.js.\nI build responsive, user-centric web applications with clean, efficient code.\nI’ve led full-stack projects involving API integration, state management, and authentication.\nMy strong leadership skills help me guide teams, manage tasks, and deliver results effectively.\nI’m passionate about creating impactful digital solutions and growing through collaboration.",
};

// Tech Stack
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  TypeScript: TypeScript,
  NodeJS: NodeJS,
  mongodb: mongodb,
  sql: sql,
  visualstudio: visualstudio,
  Express: Express,
  RestApi: RestApi
};

// Social Media URLs
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/t-nikhil-chowdary/",
  github: "https://github.com/tnikhilchowdary/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Work Experience
export const workDetails = [
  {
    Position: "React Developer",
    Company: "ADP",
    Location: "Chicago",
    Type: "Contract",
    Duration: "Jan 2024 - Present",
    Description:
      "Developed reusable and responsive UI components using React.js, integrated RESTful APIs using Axios, implemented dynamic routing with React Router, and optimized performance with lazy loading and code-splitting. Collaborated in an Agile team using GitHub and contributed to sprint planning, code reviews, and component documentation."
  },
  {
    Position: "Full Stack Developer",
    Company: "TRINOVA TECHNOLOGIES",
    Location: "India",
    Type: "FULL TIME",
    Duration: "Sep 2021 - Dec 2021",
    Description:
      "Built full-stack web applications using React.js for frontend and Node.js + Express.js for backend. Created and tested REST APIs connected to MongoDB, managed application state with Context API, and handled secure authentication flows. Collaborated in daily Agile stand-ups and used Postman for endpoint testing."
  }
];


// Education
export const eduDetails = [
  {
    Position: "Masters",
    Company: "Chicago State University, GPA: 3.9",
    Location: "Chicago",
    Type: "M.S. Computer Science",
    Duration: "AUG 2023 - May 2025",
  },
  {
    Position: "Bachelor of Technology",
    Company: "Vel Tech University",
    Location: "Chennai",
    Type: "B.Tech Computer Science",
    Duration: "Aug 2019 - May 2023",
  },
];

// Projects
export const projectDetails = [
  {
    title: "React Notes App",
    image: projectImage1,
    description: "A fully functional Notes App built with React.js that allows users to create, edit, and delete notes. Uses localStorage to persist data even after refreshing the page.",
    techstack: "React",
    previewLink: "https://addnotesinreact.netlify.app/",
    githubLink: "https://github.com/tnikhilchowdary/notes-app-react",
  },
  {
    title: "Currency Exchange App",
    image: projectImage2,
    description: "An interactive currency converter built with React.js and ExchangeRate API. Converts multiple currencies in real-time and displays conversion rates with accuracy.",
    techstack: "React",
    previewLink: "https://currency-exchangers.netlify.app/",
    githubLink: "https://github.com/tnikhilchowdary/currency-exchange-app",
  },
  {
    title: "React To-Do List",
    image: projectImage3,
    description: "A simple React app to manage tasks using the useState hook. Users can add or delete to-dos, with clean UI and basic event handling. Great for beginners in React.",
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://todolistimoportant.netlify.app/",
    githubLink: "https://github.com/tnikhilchowdary/ToDoList",
  },
  {
    title: "Counting Fruits",
    image: projectImage4,
    description: "A beginner React app for counting fruits like mangoes and bananas. Demonstrates useState, component interaction, and dynamic UI rendering. Simple and fun project.",
    techstack: "React",
    previewLink: "https://fruitscounting.netlify.app/",
    githubLink: "https://github.com/tnikhilchowdary/fruits-counter",
  },
  {
    title: "TNC Budget App",
    image: projectImage5,
    description: "A personal finance tracker built in React. Users can add, edit, and categorize expenses or income. Uses hooks like useState/useEffect. Simple and clean UI experience.",
    techstack: "React",
    previewLink: "https://tncbudgetapp.netlify.app",
    githubLink: "https://github.com/tnikhilchowdary/tnc-budget-app",
  },
  {
    title: "Read Less / More",
    image: projectImage6,
    description: "A small JavaScript/jQuery feature to expand/collapse content. Useful for FAQs, blogs, or long text blocks. Built using toggle visibility logic and clean interaction.",
    techstack: "React",
    previewLink: "https://readmoredata.netlify.app/",
    githubLink: "https://github.com/tnikhilc",
  },
];



// Contact
export const contactDetails = {
  email: "tnikhilchowdary@gmail.com",
  phone: "312-871-8572",
};
