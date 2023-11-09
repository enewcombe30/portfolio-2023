import { useState } from "react";
import { NAVITEMS } from "../constants/navbar";

export default function NavBar() {
  const [isActive, setIsActive] = useState<string>("home");

  function renderNavItems() {
    const navBar = NAVITEMS.map((item, index) => {
      const selected = isActive === item.name;
      return (
        <div
          key={index}
          className={`max-w-[4rem] text-center h-[1.5rem] my-auto hover:text-white hover:border-b hover:border-[#edf6f7] hover:border-opacity-20 cursor-pointer
          ${
            selected
              ? "text-white border-b border-[#edf6f7] border-opacity-40"
              : "text-[#878686] border-0"
          }
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
    <div className="w-full h-content justify-between flex px-20 pb-4 pt-8 border-b border-white border-opacity-20">
      <div className="text-white w-content text-[2rem]">Elijah Newcombe</div>
      <div className="flex text-sm space-x-4">{renderNavItems()}</div>
    </div>
  );
}
