import CssLogo from "./constants/Svgs/CssLogo";
import HtmlLogo from "./constants/Svgs/HtmlLogo";
import JavascriptLogo from "./constants/Svgs/JavascriptLogo";
import GithubLogo from "./constants/Svgs/GithubLogo";
import NodeJsLogo from "./constants/Svgs/NodeJsLogo";
import WordpressLogo from "./constants/Svgs/WordpressLogo";
import ReactLogo from "./constants/Svgs/ReactLogo";
import TypescriptLogo from "./constants/Svgs/TypescriptLogo";
import TailwindLogo from "./constants/Svgs/TailwindLogo";

export default function Skills() {
  return (
    <div className="w-full mx-auto h-[100%]">
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
              className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
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
    </div>
  );
}
