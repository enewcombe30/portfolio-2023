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
