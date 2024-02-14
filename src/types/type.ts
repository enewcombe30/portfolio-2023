import { ReactElement } from "react";
import { JsxElement } from "typescript";

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
