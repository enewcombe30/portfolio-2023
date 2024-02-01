import CssComponent from "../../Components/skills/CssComponent";
import GitHubComponent from "../../Components/skills/GitHubComponent";
import HtmlComponent from "../../Components/skills/HtmlComponent";
import JavascriptComponent from "../../Components/skills/JavascriptComponent";
import NodeJsComponent from "../../Components/skills/NodeJsComponent";
import ReactComponent from "../../Components/skills/ReactComponent";
import TailwindComponent from "../../Components/skills/TailwindComponent";
import TypescriptComponent from "../../Components/skills/TypescriptComponent";
import WordpressComponent from "../../Components/skills/WordpressComponent";

export default function SkillCircle() {
  return (
    <>
      <div className="border-[2rem] border-double border-green-500 border-opacity-10 rounded-full h-[25rem] w-[25rem] left-[40%] space-between mx-auto">
        <div className="w-full h-full grid grid-cols-3 p-6 ">
          <div className="relative w-fit h-fit right-[2rem] bottom-3">
            <TypescriptComponent tipPosition="bottom-[5.5rem] right-[15.5rem]" />
          </div>
          <div className="relative top-[-4.5rem] left-4 h-content">
            <JavascriptComponent tipPosition="bottom-[7rem] right-[18.5rem]" />
          </div>
          <div className="relative left-[3.5rem] bottom-3 h-content">
            <HtmlComponent tipPosition="xl:bottom-[7.5rem] xl:left-[5rem] lg:right-[2.5rem] lg:bottom-[10.5rem]" />
          </div>
          <div className="relative right-[4.5rem] top-[0.5rem] h-content">
            <NodeJsComponent tipPosition="bottom-[6rem] right-[15.5rem]" />
          </div>
          <div className="relative h-content">
            <ReactComponent tipPosition="bottom-2 right-[4rem]" />
          </div>
          <div className="relative top-[0.5rem] right-[-6.5rem] h-content">
            <CssComponent tipPosition="bottom-[7rem] xl:left-[5rem] lg:bottom-[5rem] lg:right-[18rem]" />
          </div>
          <div className="relative top-[3.5rem] left-[-1.25rem] h-content">
            <GitHubComponent tipPosition="bottom-[1.5rem] right-[18rem]" />
          </div>
          <div className="relative top-[6.5rem] left-[0.8rem] h-content">
            <TailwindComponent tipPosition="top-[1.75rem] left-[6.5rem]" />
          </div>
          <div className="relative left-[3.6rem] top-[2.7rem]">
            <WordpressComponent tipPosition="xl:bottom-[5rem] xl:left-[5rem] lg:right-[3rem]" />
          </div>
        </div>
      </div>
    </>
  );
}
