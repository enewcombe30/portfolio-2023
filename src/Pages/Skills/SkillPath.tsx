import CssLogo from "../../Images/svgs/CssLogo";
import HtmlLogo from "../../Images/svgs/HtmlLogo";
import JavascriptLogo from "../../Images/svgs/JavascriptLogo";
import GithubLogo from "../../Images/svgs/GithubLogo";
import NodeJsLogo from "../../Images/svgs/NodeJsLogo";
import WordpressLogo from "../../Images/svgs/WordpressLogo";
import ReactLogo from "../../Images/svgs/ReactLogo";
import TypescriptLogo from "../../Images/svgs/TypescriptLogo";
import TailwindLogo from "../../Images/svgs/TailwindLogo";

export default function SkillPath() {
  return (
    <div className="p-8 h-content min-h-screen mx-auto w-[90%]">
      <div className="flex flex-wrap">
        <div className="flex w-[24.9rem] my-4">
          <HtmlLogo />
          <div
            className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
          >
            HTML5
            <ul className="list-disc ml-4 mt-1 ">
              <li>1 year Commercial experience</li>
              <li>2 years Personal project experience</li>
            </ul>
          </div>
        </div>
        <div className="flex w-[24.9rem] my-4">
          <CssLogo />
          <div
            className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm ease-in-out duration-700 transition-opacity`}
          >
            CSS3
            <ul className="list-disc ml-4 mt-1">
              <li>1 year Commercial experience</li>
              <li>2 years Personal project experience</li>
            </ul>
          </div>
        </div>
        <div className="flex w-[24.9rem] pl-[0.3rem] my-4">
          <JavascriptLogo />
          <div
            className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
          >
            JavaScript
            <ul className="list-disc ml-4 mt-1 ">
              <li>1 year Commercial experience</li>
              <li>2 years Personal project experience</li>
            </ul>
          </div>
        </div>
        <div className="flex w-[24.9rem] pl-2 my-4">
          <GithubLogo />
          <div
            className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm ml-2 p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
          >
            GitHub
            <ul className="list-disc ml-4 mt-1 ">
              <li>1 year Commercial experience</li>
              <li>2 year Personal project experience</li>
            </ul>
          </div>
        </div>
        <div className="flex w-[24.9rem] my-4">
          <NodeJsLogo />
          <div
            className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
          >
            Node.js
            <ul className="list-disc ml-4 mt-1 ">
              <li>1 year Commercial experience</li>
            </ul>
          </div>
        </div>
        <div className="flex mr-[-0.45rem] w-[24.9rem] my-4">
          <WordpressLogo />
          <div
            className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
          >
            Wordpress
            <ul className="list-disc ml-4 mt-1 ">
              <li>1 year Commercial experience</li>
            </ul>
          </div>
        </div>
        <div className="flex w-[24.9rem] my-4">
          <ReactLogo />
          <div
            className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm p-2 ml-1 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
          >
            React
            <ul className="list-disc ml-4 mt-1 ">
              <li>1 year Commercial experience</li>
            </ul>
          </div>
        </div>
        <div className="flex pl-1 w-[24.9rem] my-4">
          <TypescriptLogo />
          <div
            className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
          >
            TypeScript
            <ul className="list-disc ml-4 mt-1">
              <li>1 year commercial experience</li>
            </ul>
          </div>
        </div>
        <div className="flex w-[24.9rem] pl-[0.2rem] my-4">
          <span className="mr-2">
            <TailwindLogo />
          </span>
          <div
            className={`h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
          >
            TailwindCSS
            <ul className="list-disc ml-4 mt-1 ">
              <li>1 year Commercial experience</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
