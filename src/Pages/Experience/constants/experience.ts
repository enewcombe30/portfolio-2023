import { Experience, WorkExperience } from "../../../types/type";
import fernImage from "./fernLogo.png";
import cadenceLogo from "./cadenceLogo.png";

export const FERN: Experience = {
  name: "fern",
  label: "Fern",
  image: fernImage,
  blurb:
    "Junior Developer for a start-up company building Automation Software designed to provide Ad agencies IFTTT functionality when managing Amazon Sellers and Brands. Building and maintaining frontend code and Designing, building and maintaining unit and end-to-end tests.",
  skills: [
    {
      skill:
        "Building and maintaining React components focused on delivering clean and concise code to provide reusability. ",
    },
    {
      skill:
        "Designing, Building and Maintaining End-to-End tests using Cypress to identify broken code and prevent bugs reaching the production environment.",
    },
    {
      skill:
        "Created a web scrapping process using Node.JS to generate lists of brands and agencies for the sales team to approach. ",
    },
    {
      skill:
        "Regular communication with dev team, designers and CEO to query potential problems and generate action plans to avoid delays in productivity.",
    },
    {
      skill:
        "Building and Maintaining the apps landing page using Webflow inline with the designs at specified breakpoints.",
    },
    {
      skill:
        "Using debugging tools and techniques when problem solving to efficiently identify and correct  problematic functions and variables in the codebase.",
    },
  ],
};

export const CADENCE_AUDIO: Experience = {
  name: "cadenceAudio",
  label: "Cadence Audio",
  image: cadenceLogo,
  blurb:
    "IT support for a High End Audio company Spearheading an Online Rebrand to tackle the loss of trade caused by COVID19 lockdowns. Maintaining a portfolio of 6 Wordpress websites including two e-commerce sites using WooCommerce and Bluepark.",
  skills: [
    {
      skill:
        "Maintaining Wordpress Websites Using wp-cli to Manage Plugins, Backups, Software Updates and adding New Products",
    },
    {
      skill:
        "Managing all 301 Redirects  to Retain SEO Placement when Migrating from Wordpress to eCommerce site",
    },
    {
      skill:
        "Managing Google Ads to Increase Traffic to sites focused on Raising Awareness to less Profitable Aspects of the Business",
    },
    {
      skill:
        "Designing and Building new websites to streamline online operations and improving User Interface to increase User Experience",
    },
    {
      skill:
        "Delivering Site Analytics to Owner, CEOs and Directors to identify and address positive and negative aspects of online presence",
    },
    {
      skill:
        "Researched Company Product Portfolio to ensure correct Strengths and Specifications were represented accurately online",
    },
  ],
};

export const ExperienceList: WorkExperience = {
  experience: [FERN, CADENCE_AUDIO],
};
