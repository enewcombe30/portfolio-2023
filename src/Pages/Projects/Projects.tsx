import { myProjects } from "./constants/projects";

export default function Projects() {
  function renderProjects() {
    const projects = myProjects.projects.map((project, index) => {
      return (
        <>
          <div className="mx-4">
            <a href={project.link} target="_blank" key={index}>
              <div className="cursor-pointer rounded-lg sm:p-2 md:p-4 border bg-[#061c03] border-green-500 border-opacity-10 w-[22rem] h-fit my-auto mb-6">
                <img
                  className="rounded-lg w-[20rem] h-[9.5rem] mx-auto mt-3"
                  src={project.logo}
                  alt={`Project ${index} logo`}
                />
                <div className={`mx-auto w-fit text-xl mt-4 ${project.styles}`}>
                  {project.label}
                </div>
              </div>
            </a>
          </div>
        </>
      );
    });
    return projects;
  }
  return (
    <>
      <div className="my-[2rem] pb-[5rem] w-full h-full overflow-y-scroll no-scrollbar">
        <div className="w-content py-10 mx-auto flex-wrap flex w-full">
          {renderProjects()}
        </div>
      </div>
    </>
  );
}
