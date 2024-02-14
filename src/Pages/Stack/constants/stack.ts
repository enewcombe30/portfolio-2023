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
      personalExp: "2 years Personal project experience",
    },
    {
      name: "css",
      label: "CSS3",
      logo: CssLogo(),
      description:
        "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)",
      commercialExp: "1 year Commercial experience",
      personalExp: "2 years Personal project experience",
    },
    {
      name: "js",
      label: "JavaScript",
      logo: JavascriptLogo(),
      description: "",
      commercialExp: "1 year Commercial experience",
      personalExp: "2 years Personal project experience",
    },
    {
      name: "github",
      label: "GitHub",
      logo: GithubLogo(),
      description: "",
      commercialExp: "1 year Commercial experience",
      personalExp: "2 years Personal project experience",
    },
    {
      name: "nodejs",
      label: "Node.js",
      logo: NodeJsLogo(),
      description: "",
      commercialExp: "1 year Commercial experience",
      personalExp: null,
    },
    {
      name: "wordpress",
      label: "Wordpress",
      logo: WordpressLogo(),
      description: "",
      commercialExp: "1 year Commercial experience",
      personalExp: null,
    },
    {
      name: "react",
      label: "React",
      logo: ReactLogo(),
      description: "",
      commercialExp: "1 year Commercial experience",
      personalExp: "1 years Personal project experience",
    },
    {
      name: "ts",
      label: "TypeScript",
      logo: TypescriptLogo(),
      description: "",
      commercialExp: "1 year Commercial experience",
      personalExp: "1 years Personal project experience",
    },
    {
      name: "tailwind",
      label: "TailwindCSS",
      logo: TailwindLogo(),
      description: "",
      commercialExp: "1 year Commercial experience",
      personalExp: "1 years Personal project experience",
    },
  ],
};
