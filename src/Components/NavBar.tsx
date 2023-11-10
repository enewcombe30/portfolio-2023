import { NAVITEMS } from "../constants/navbar";

interface props {
  isActive: string;
  setIsActive: (isActive: string) => void;
}

export default function NavBar({ isActive, setIsActive }: props) {
  function renderNavItems() {
    const navBar = NAVITEMS.map((item, index) => {
      const selected = isActive === item.name;
      return (
        <div
          key={index}
          className={`max-w-[4rem] h-[2.5rem] pb-1 mb-2 text-lg cursor-pointer 
          ${selected ? "text-white" : "text-[#878686] hover:text-[#b1afaf]"}
          `}
          onClick={() => setIsActive(item.name)}
        >
          {item.label}
        </div>
      );
    });
    return navBar;
  }

  return (
    <div className="w-[21.5rem] h-screen justify-between fixed px-10 pb-4 pt-8 border-r border-[#072404] bg-gradient-to-r from-[#061c03]">
      <div className="text-white text-[2rem] ">Elijah Newcombe</div>
      <div className="text-[#878c8d] text-[1.2rem] mb-[6rem]">
        Junior Software Engineer
      </div>
      <div className="pb-12 h-content">
        <div className="text-sm my-auto h-content">{renderNavItems()}</div>
        <div
          className={`h-[1.5rem] fixed bottom-8 py-8 text-lg my-auto cursor-pointer
          ${
            isActive === "learn more"
              ? "text-white"
              : "text-[#878686] hover:text-[#b1afaf]"
          }
          `}
          onClick={() => setIsActive("learn more")}
        >
          Learn more
        </div>
      </div>
    </div>
  );
}
