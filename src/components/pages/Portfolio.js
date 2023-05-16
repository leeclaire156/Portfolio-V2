import React from 'react';
import ProjectCards from '../projects/projectCards';
import JATE from '../../images/projectScreenshots/JATE.PNG'
import SocialNetworkAPI from '../../images/projectScreenshots/Social-Network-API.PNG'
import PlayDate from '../../images/projectScreenshots/PlayDate.PNG'
import InterestingTechBlog from '../../images/projectScreenshots/IT-Blog.PNG'
import ECommerce from '../../images/projectScreenshots/ECommerce.PNG'
import ProducePal from '../../images/projectScreenshots/Produce-Pal.png'

const projects = [
  // Newest project
  {
    key: 0,
    src: ProducePal,
    imgAlt: "Thumbnail of Produce Pal, an e-commerce site for community supported agricultures to connect between farms and interested customers to reserve a farmer's products.",
    name: "Produce Pal",
    description: "This project is an e-commerce site for community supported agricultures to connect between farms and interested customers to reserve a farmer's products.",
    githubLink: "https://github.com/leeclaire156/Produce-Pal/",
    deployedLink: "https://ppt-1.herokuapp.com/",
    tech: "M.E.R.N., MongoDB Atlas, GraphQL, JWT, Stripe, Cloudinary, Boostrap, FlatIcon",
    username: "username: username@gmail.com",
    password: "password: password"
  },
  {
    key: 1,
    src: JATE,
    imgAlt: "Thumbnail of JATE, the text editor PWA in it's browser form",
    name: "Just Another Text Editor PWA",
    description: "This project is a text editor progressive web application called 'Just Another Text Editor' or JATE",
    githubLink: "https://github.com/leeclaire156/Text-Editor-PWA",
    deployedLink: "https://jate-lee-claire-156.herokuapp.com/",
    tech: "express, node, REST API, babel, webpack, workbox, service worker, CSS, JavaScript, HTML"
  },
  {
    key: 2,
    src: SocialNetworkAPI,
    imgAlt: "Thumbnail of Demo Video for Social Network API",
    name: "Social Network API",
    description: "This project is a a social network web application that uses a NoSQL database, where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    githubLink: "https://github.com/leeclaire156/Social-Network-API",
    deployedLink: "https://drive.google.com/file/d/1l4HxoSLraysc5bvxBl-rg5Fd5SjFOH2w/view",
    tech: "MongoDB, MongoDB Compass, Insomnia, Express.JS, JavaScript, REST API"
  },
  {
    key: 3,
    src: PlayDate,
    imgAlt: "Thumbnail of PlayDate homepage, with recommended parks and local event cards made by other users.",
    name: "PlayDate",
    description: "This project is a dog-based event hosting website that allows users to make, edit, or delete posts to meet other dog-owners for play dates. Logged in users can view nearby parks according to their account's zip code.",
    githubLink: "https://github.com/leeclaire156/PlayDate",
    deployedLink: "https://boiling-temple-57076.herokuapp.com/",
    tech: "MySQL, Sequelize, Express, Node, REST API, MVC paradigm, Cloudinary, Axios, Google Search API, MVC paradigm Formidable, Handlebars, JShint, dotenv, bcrypt, FlatIcon, Paint, S.A.I.",
    username: "username: username@gmail.com",
    password: "password: password"
  },
  {
    key: 4,
    src: InterestingTechBlog,
    imgAlt: "Thumbnail of Interesting Tech Blog homepage with blog posts from other users.",
    name: "Interesting Tech Blog",
    description: "This is content management system (CMS) style blog where users can make blog posts and comment on other user's posts as well.",
    githubLink: "https://github.com/leeclaire156/Interesting-Tech-Blog",
    deployedLink: "https://interesting-tech-blog.herokuapp.com/",
    tech: "MySQL, Sequelize, Express, Node, Handlebars, JSHint, bcrypt, dotenv, REST API, Insomnia, MVC paradigm",
    username: "username: username@gmail.com",
    password: "password: password"
  },
  {
    key: 5,
    src: ECommerce,
    imgAlt: "Thumbnail of Demo Video for E-Commerce Back End",
    name: "E-Commerce Back End",
    description: "This project creates the back end API Routes for an e-commerce site with a MySQL database using Express API and Sequelize.",
    githubLink: "https://github.com/leeclaire156/E-Commerce-Back-End",
    deployedLink: "https://drive.google.com/file/d/1_f5dkOjbTo1rSzolt0RRD8hyyWr05-bj/view",
    tech: "MySQL, Sequelize, Express, Node, REST API, Insomnia"
  },
  // Oldest project
  // {
  //   key: 6,
  //   src: EmployeeTracker,
  //   imgAlt: "Thumbnail of Demo Video for Employee Tracker content management system",
  //   name: "Employee Tracker",
  //   description: "This project is a command-line application that functions as a content management system (CMS), able to manage a company's employee database.",
  //   githubLink: "https://github.com/leeclaire156/Employee-Tracker",
  //   deployedLink: "https://drive.google.com/file/d/1N7DE3uk6BgSCyI6HEmMhzYurrts2tkeV/view"
  // },
];

export default function Portfolio() {
  return (
    <div className="Portfolio contentWrapper">
      <h2>Portfolio Page</h2>
      <ProjectCards projects={projects} />
    </div>
  );
}
