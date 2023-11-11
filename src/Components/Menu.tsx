import { MenuItems } from "../constants/menu";
import Toggle from "./Toggle";

interface props {
  isActive: string;
  setIsActive: (isActive: string) => void;
}

export default function Menu({ isActive, setIsActive }: props) {
  function renderMenuItems() {
    const navBar = MenuItems.menu.map((item, index) => {
      const selected = isActive === item.name;
      return (
        <div
          key={index}
          className={`max-w-[5rem] h-[2.5rem] pb-1 mb-2 text-sm cursor-pointer 
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
    <div className="w-[21.5rem] h-screen justify-between fixed left-0 px-10 pb-4 pt-8 bg-gradient-to-r from-[#061c03]">
      <div className="text-white text-[1.75rem] ">Elijah Newcombe</div>
      <div className="text-[#878c8d] text-[1.1rem] mb-[6rem]">
        Junior Web Developer
      </div>
      <div className="pb-12 h-content my-auto">
        <div className="h-content">{renderMenuItems()}</div>
      </div>
      <div className="fixed bottom-6 py-8">
        <Toggle label="Toggle theme" />
      </div>
    </div>
  );
}
