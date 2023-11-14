export type MenuItem = {
  name: string;
  label: string;
};

export type Menu = {
  menu: MenuItem[];
};

export type PageLink = {
  name: string;
  label: string;
  logo: string;
  link: string;
};

export type PageLinks = {
  links: PageLink[];
};
