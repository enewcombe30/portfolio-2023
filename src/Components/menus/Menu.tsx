import { MenuItems } from "../../constants/menu";
import { MenuItem } from "../../types/type";

interface props {
  selectedItem: MenuItem;
  setSelectedItem: (selectedItem: MenuItem) => void;
}

export default function Menu({ selectedItem, setSelectedItem }: props) {
  function renderMenuItems() {
    const navBar = MenuItems.menu.map((item, index) => {
      const selected = selectedItem === item;
      return (
        <div
          key={index}
          className={`max-w-[5rem] h-[2.5rem] pb-1 mb-2 text-sm cursor-pointer 
          ${selected ? "text-white" : "text-[#878686] hover:text-[#b1afaf]"}
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
    <div className="min-w-[18rem] max-w-[32rem] h-full left-0 px-10 pb-4 pt-8 ">
      <div className="text-white text-[1.75rem] ">Elijah Newcombe</div>
      <div className="text-[#878c8d] text-[1.1rem] mb-[5rem]">
        Junior Web Developer
      </div>
      <div className="pb-12 h-content my-auto">
        <div className="h-content">{renderMenuItems()}</div>
      </div>
    </div>
  );
}
