import { ReactElement } from "react";

export type MenuItem = {
  name: string;
  label: string;
};

export type Menu = {
  menu: MenuItem[];
};

export type WorkExperience = {
  experience: Experience[];
};

export type Experience = {
  name: string;
  label: string;
  image: string;
  blurb: string;
  skills: Skills[];
};

export type Skills = {
  skill: string;
};

export type Stack = {
  stack: StackItem[];
};

export type StackItem = {
  name: string;
  label: string;
  logo: ReactElement;
  description: string;
  commercialExp: string;
  personalExp: string | null;
};

export type projectScreenshot = {
  name: string;
  image: string;
};

export type projectLogo = {
  name: string;
  label: string;
  logo: string;
};

export type projectDetailBlock = {
  name: string;
  label: string;
  description: projectDetail[];
};
export type projectDetail = {
  line: string;
};

export type projectBlock = {
  screenshots: projectScreenshot[];
  logo: projectLogo;
  projectBlurb: string;
  detail: projectDetailBlock[];
};

export type projects = {
  projects: projectBlock[];
};
