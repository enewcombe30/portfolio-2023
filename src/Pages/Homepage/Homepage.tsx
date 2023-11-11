import { HomePageLinks } from "../../constants/homepage";

export default function Homepage() {
  function renderLinks() {
    const links = HomePageLinks.links.map((link, index) => {
      return (
        <div
          key={index}
          className={`w-[7.5rem] h-[2.5rem] rounded-full px-2 pt-2.5 bg-[#296921] text-sm cursor-pointer text-center `}
        >
          <span className="my-auto h-fit w-content">{link.label}</span>
        </div>
      );
    });
    return links;
  }
  return (
    <div className="my-[2rem] w-full overflow-scroll">
      <div className="w-full flex">
        <div className="my-auto ml-1 w-3 h-3 border border-green-500 border-opacity-20"></div>
        <div className="my-auto text-sm ml-4">Introduction</div>
        <div className="bg-green-500 opacity-20 h-px w-full my-auto ml-4"></div>
      </div>
      <div className="w-full pl-11 py-10 text-lg space-y-6">
        <p className="text-[2.5rem]">
          Hello! I'm Elijah, a Junior Web Developer
        </p>
        <p className="text-[1.5rem]">
          Working with Javascript and Typescript using React and tailwind to
          bring websites to life!
        </p>
        <p className="text-[#cdcbcb]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="mt-[4rem] flex justify-between pl-11">
        {renderLinks()}
      </div>
    </div>
  );
}
