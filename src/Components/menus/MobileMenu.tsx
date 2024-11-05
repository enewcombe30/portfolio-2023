import { useState } from "react";
import { MenuItems } from "../../constants/menu";
import MenuIcon from "../../Pages/Stack/constants/Svgs/MenuIcon";
import CrossIcon from "../../Pages/Stack/constants/Svgs/CrossIcon";
import Toggle from "../Toggle";
import { MenuItem } from "../../types/type";

interface props {
  selectedItem: MenuItem;
  setSelectedItem: (selectedItem: MenuItem) => void;
}

export default function MobileMenu({ selectedItem, setSelectedItem }: props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function renderMenuItems() {
    const navBar = MenuItems.menu.map((item, index) => {
      const selected = selectedItem === item;
      return (
        <div
          key={index}
          className={`max-w-[5rem] h-[2.5rem] mb-5 text-7 cursor-pointer 
          ${selected ? "text-white" : "text-[#878686]"}
          `}
          onClick={() => setSelectedItem(item)}
        >
          {item.label}
        </div>
      );
    });
    return navBar;
  }

  return (
    <>
      <div
        className="absolute top-2 left-[1rem]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
      </div>

      {isOpen && (
        <div className="w-screen h-screen transition-opacity duration-75 origin-top p-8 fixed left-0 top-0 z-50 bg-[#050f05] bg-opacity-[.98] xs:block sm:hidden">
          <div className="h-[6rem] w-full bg-[#050f05]">
            <div
              className="cursor-pointer absolute top-[3.9rem] left-[3rem]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CrossIcon />
            </div>
            <div className="absolute right-8 top-[3.5rem]">
              <Toggle label="Toggle theme" labelPosition="left" />
            </div>
          </div>
          <div className="mt-[3rem] pl-5">
            <div className="text-white text-[2.25rem] ">Elijah Newcombe</div>
            <div className="text-[#878c8d] text-[1.5rem] mb-[7rem]">
              Frontend Web Developer
            </div>
            <div className="h-content my-auto">
              <div className="h-content">{renderMenuItems()}</div>
            </div>
            <div className="text-4 text-[#878686] cursor-pointer mb-4">
              Download CV
            </div>
          </div>
        </div>
      )}
    </>
  );
}
