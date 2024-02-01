import SkillCircle from "./SkillCircle";
import SkillPath from "./SkillPath";

export default function Skills() {
  return (
    <div className="w-full h-full p-10">
      {/* <div className="xs:hidden sm:hidden md:hidden lg:block xl:block">
        <SkillCircle />
      </div> */}
      {/* <div className="xs:block sm:block md:block lg:hidden xl:hidden"> */}
      <SkillPath />
      {/* </div> */}
    </div>
  );
}
