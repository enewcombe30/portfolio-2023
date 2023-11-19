import JavascriptComponent from "../../Components/skills/JavascriptComponent";
import TypescriptComponent from "../../Components/skills/TypescriptComponent";
import CssLogo from "../../Images/svgs/CssLogo";
import GithubLogo from "../../Images/svgs/GithubLogo";
import HtmlLogo from "../../Images/svgs/HtmlLogo";
import NodeJsLogo from "../../Images/svgs/NodeJsLogo";
import ReactLogo from "../../Images/svgs/ReactLogo";
import TailwindLogo from "../../Images/svgs/TailwindLogo";
import WordpressLogo from "../../Images/svgs/WordpressLogo";

export default function Skills() {
  return (
    <div className="w-full h-full p-10">
      <div className="border-4 border-green-500 border-opacity-5 rounded-full h-[25rem] w-[25rem] left-[45%] space-between fixed">
        <div className="w-full h-full grid grid-cols-3 p-6 ">
          <div className="relative w-fit h-fit">
            <TypescriptComponent />
          </div>
          <div className="relative top-[-3.75rem] left-[1rem]">
            <JavascriptComponent />
          </div>
          <div className="relative left-[3rem]">
            <HtmlLogo />
          </div>
          <div className="relative right-[3.75rem] top-6">
            <NodeJsLogo />
          </div>
          <div className="relative top-3 left-1">
            <ReactLogo />
          </div>
          <div className="relative top-5 right-[-6.5rem]">
            <CssLogo />
          </div>
          <div className="relative bottom-[-2.5rem] left-[0.25rem]">
            <GithubLogo />
          </div>
          <div className="relative bottom-[-6rem] left-[1.75rem]">
            <TailwindLogo />
          </div>
          <div className="relative left-[3rem] top-[1.75rem]">
            <WordpressLogo />
          </div>
        </div>
      </div>
    </div>
  );
}
