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
      commercialExp: "1 year Commercial experience",
      personalExp: "2 years Personal project experience",
    },
    {
      name: "css",
      label: "CSS3",
      logo: CssLogo(),
      commercialExp: "1 year Commercial experience",
      personalExp: "2 years Personal project experience",
    },
    {
      name: "js",
      label: "JavaScript",
      logo: JavascriptLogo(),
      commercialExp: "1 year Commercial experience",
      personalExp: "2 years Personal project experience",
    },
    {
      name: "github",
      label: "GitHub",
      logo: GithubLogo(),
      commercialExp: "1 year Commercial experience",
      personalExp: "2 years Personal project experience",
    },
    {
      name: "nodejs",
      label: "Node.js",
      logo: NodeJsLogo(),
      commercialExp: "1 year Commercial experience",
      personalExp: null,
    },
    {
      name: "wordpress",
      label: "Wordpress",
      logo: WordpressLogo(),
      commercialExp: "1 year Commercial experience",
      personalExp: null,
    },
    {
      name: "react",
      label: "React",
      logo: ReactLogo(),
      commercialExp: "1 year Commercial experience",
      personalExp: "1 years Personal project experience",
    },
    {
      name: "ts",
      label: "TypeScript",
      logo: TypescriptLogo(),
      commercialExp: "1 year Commercial experience",
      personalExp: "1 years Personal project experience",
    },
    {
      name: "tailwind",
      label: "TailwindCSS",
      logo: TailwindLogo(),
      commercialExp: "1 year Commercial experience",
      personalExp: "1 years Personal project experience",
    },
  ],
};
