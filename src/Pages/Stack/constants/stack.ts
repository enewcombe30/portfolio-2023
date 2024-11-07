import { Stack } from "../../../types/type";
import HtmlLogo from "./Svgs/HtmlLogo";
import CssLogo from "./Svgs/CssLogo";
import JavascriptLogo from "./Svgs/JavascriptLogo";
import GithubLogo from "./Svgs/GithubLogo";
import NodeJsLogo from "./Svgs/NodeJsLogo";
import WordpressLogo from "./Svgs/WordpressLogo";
import ReactLogo from "./Svgs/ReactLogo";
import TypescriptLogo from "./Svgs/TypescriptLogo";
import TailwindLogo from "./Svgs/TailwindLogo";

export const TechStack: Stack = {
  stack: [
    {
      name: "html",
      label: "HTML5",
      logo: HtmlLogo(),
      description:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser",
      commercialExp: "1 year Commercial experience",
      personalExp: "3 years Personal project experience",
    },
    {
      name: "css",
      label: "CSS3",
      logo: CssLogo(),
      description:
        "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)",
      commercialExp: "1 year Commercial experience",
      personalExp: "3 years Personal project experience",
    },
    {
      name: "js",
      label: "JavaScript",
      logo: JavascriptLogo(),
      description:
        "Often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior",
      commercialExp: "1 year Commercial experience",
      personalExp: "3 years Personal project experience",
    },
    {
      name: "github",
      label: "GitHub",
      logo: GithubLogo(),
      description:
        "GitHub is a developer platform that allows developers to create, store, manage and share their code.",
      commercialExp: "1 year Commercial experience",
      personalExp: "3 years Personal project experience",
    },
    {
      name: "nodejs",
      label: "Node.js",
      logo: NodeJsLogo(),
      description:
        "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. ",
      commercialExp: "1 year Commercial experience",
      personalExp: null,
    },
    {
      name: "wordpress",
      label: "Wordpress",
      logo: WordpressLogo(),
      description:
        "WordPress (also known as WP or WordPress.org) is a web content management system. It was originally created as a tool to publish blogs but has evolved to support publishing other web content, including more traditional websites, mailing lists and Internet forum, media galleries, membership sites, learning management systems and online stores.",
      commercialExp: "1 year Commercial experience",
      personalExp: "3 years Personal project experience",
    },
    {
      name: "react",
      label: "React",
      logo: ReactLogo(),
      description:
        "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components.",
      commercialExp: "1 year Commercial experience",
      personalExp: "2 years Personal project experience",
    },
    {
      name: "ts",
      label: "TypeScript",
      logo: TypescriptLogo(),
      description:
        "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript",
      commercialExp: "1 year Commercial experience",
      personalExp: "2 years Personal project experience",
    },
    {
      name: "tailwind",
      label: "TailwindCSS",
      logo: TailwindLogo(),
      description: `Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching`,
      commercialExp: "1 year Commercial experience",
      personalExp: "2 years Personal project experience",
    },
  ],
};
