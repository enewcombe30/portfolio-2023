import { myProjects } from "./constants/projects";
import { useState } from "react";

export default function Projects() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="my-[2rem] pb-[5rem] w-full h-full overflow-y-scroll no-scrollbar">
        <div className="w-content py-10 space-x-8 mx-auto flex-wrap flex w-fit">
          <div
            className="cursor-pointer rounded-lg sm:p-2 md:p-4 border bg-[#061c03] border-green-500 border-opacity-10 w-fit h-fit my-auto mb-6"
            onClick={() => setOpen(!open)}
          >
            <img
              className="opacity-95 rounded-lg max-w-[20.5rem] min-w-[6rem]"
              src={myProjects.projects[0].logo.logo}
              alt="Experience logo"
            />
            <div className="mx-auto w-fit text-2xl mt-4">
              {myProjects.projects[0].logo.label}
            </div>
          </div>
        </div>
        {open && (
          <div className="mx-auto border bg-[#061c03] border-green-500 border-opacity-10 fixed w-[70%] h-[75%] top-[15%]"></div>
        )}
      </div>
    </>
    // <div className="my-[2rem] pb-[5rem] w-full h-full overflow-y-scroll no-scrollbar">
    //   <div className="w-content py-10 text-lg space-y-8 mx-auto">
    //     <div className="rounded-lg max-w-[80rem] mx-auto h-content sm:p-6 md:p-8 border bg-[#061c03] border-green-500 border-opacity-10">
    //       <div className="sm:flex-none md:flex-none lg:flex w-full sm:space-x-0 md:space-x-0 lg:space-x-8 mb-4 py-2">
    //         <div className="py-1 min-h-[6rem] my-auto">
    //           <img
    //             className="opacity-95 rounded-lg mb-6 w-[50%] max-w-[20.5rem] min-w-[6rem]"
    //             src={myProjects.projects[0].screenshots[0].image}
    //           />
    //         </div>
    //         <div className="min-w-[9rem] text-[1rem] min-h-[6rem] flex-none">
    //           {myProjects.projects[0].logo.logo}
    //           <div>{myProjects.projects[0].projectBlurb}</div>
    //         </div>
    //       </div>
    //       <div className="bg-green-500 opacity-20 h-px w-full my-auto xs:my-1 sm:my-3"></div>
    //       <div className="w-full">
    //         {myProjects.projects[0].detail[0].description[0].line}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
