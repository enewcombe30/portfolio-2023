import Link from "next/link";
import { MenuItems } from "../../constants/menu";

export default function Menu() {
  function renderMenuItems() {
    return MenuItems.menu.map((item, index) => (
      <Link
        key={index}
        href={item.route} // Make sure each item in MenuItems.menu has a `route` property like "/about"
        className="block max-w-[5rem] h-[2.5rem] pb-1 mb-2 text-sm cursor-pointer text-[#878686] hover:text-[#b1afaf]"
      >
        {item.label}
      </Link>
    ));
  }

  return (
    <div className="md:min-w-[4rem] lg:min-w-[16rem] max-w-[32rem] h-full left-0 px-8 pb-4 pt-12 ">
      <div className="pb-12 h-content my-auto mt-12">
        <div className="h-content">{renderMenuItems()}</div>
      </div>
    </div>
  );
}
