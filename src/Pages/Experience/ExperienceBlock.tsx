import { Experience } from "../../types/type";

interface props {
  experience: Experience;
}

export default function ExperienceBlock({ experience }: props) {
  function renderSkills() {
    const skills = experience.skills.map((skill, index) => {
      return (
        <>
          <div className="text-[0.825rem] flex mb-1">
            <div className="mr-2 pt-[0.625rem]">
              <div className="w-2 h-2 bg-green-600 bg-opacity-70 rounded-sm "></div>
            </div>
            <ul key={index}>{skill.skill}</ul>
          </div>
        </>
      );
    });
    return skills;
  }
  return (
    <>
      <div className="rounded-lg max-w-[50rem] mx-auto h-content sm:p-6 md:p-8 border bg-[#061c03] border-green-500 border-opacity-10">
        <div className="sm:flex-none md:flex-none lg:flex w-full sm:space-x-0 md:space-x-0 lg:space-x-8 mb-4 py-2">
          <div className="py-1 min-h-[6rem] my-auto mx-auto">
            <img
              className="rounded-lg mx-auto mb-6 max-w-[20.5rem] min-w-[6rem]"
              src={experience.image}
              alt="Experience logo"
            />
          </div>
          <div className="w-full min-w-[9rem] text-[1rem] min-h-[6rem] px-4">
            {experience.blurb}
          </div>
        </div>
        <div className="bg-green-500 opacity-20 h-px w-full my-auto xs:my-1 sm:my-3"></div>
        <div className="w-full px-4">{renderSkills()}</div>
      </div>
    </>
  );
}
