// import React from "react";

import { ExperienceList } from "./constants/experience";
import ExperienceBlock from "./ExperienceBlock";

export default function Experience() {
  function renderBlocks() {
    const skills = ExperienceList.experience.map((block, index) => {
      return (
        <>
          <ExperienceBlock experience={block} key={index} />
        </>
      );
    });
    return skills;
  }

  return (
    <div className="my-[2rem] pb-[5rem] w-full h-full overflow-y-scroll no-scrollbar">
      <div className="w-full pl-11 py-10 text-lg space-y-8 overflow-y-scroll no-scrollbar">
        <>{renderBlocks()}</>
      </div>
    </div>
  );
}
