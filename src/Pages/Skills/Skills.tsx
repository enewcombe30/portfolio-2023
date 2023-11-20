import SkillCircle from "./SkillCircle";
import SkillPath from "./SkillPath";

export default function Skills() {
  return (
    <div className="w-full h-full p-10">
      <div className="md:hidden lg:block">
        <SkillCircle />
      </div>
      <div className="md:block lg:hidden">
        <SkillPath />
      </div>
    </div>
  );
}
