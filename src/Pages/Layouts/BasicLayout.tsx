import Menu from "../../Components/menus/Menu";
import ContactAndCv from "../../Components/ContactAndCv";
import { ReactElement } from "react";
import MobileMenu from "../../Components/menus/MobileMenu";
import { MenuItem } from "../../types/type";
import Toggle from "../../Components/Toggle";

interface props {
  children: ReactElement;
  selectedItem: MenuItem;
  setSelectedItem: (selectedItem: MenuItem) => void;
}

export default function BasicLayout({
  children,
  selectedItem,
  setSelectedItem,
}: props) {
  return (
    <div
      className={`h-full w-full bg-[#050f05] absolute left-0 bg-gradient-to-r from-[#061c03]`}
    >
      <div className=" text-[#f0f5f0] h-full flex">
        <div
          className={`xs:block sm:hidden md:hidden xl:hidden absolute left-6 top-12 `}
        >
          <MobileMenu
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
        <div className="xs:right-8 xs:top-12 sm:right-12 sm:top-12 absolute">
          <ContactAndCv />
        </div>
        <div className="xs:hidden sm:block md:block xl:block max-w-[32rem]">
          <Menu selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
        <div className="xs:mt-[4rem] sm:mt-[3rem] p-12 w-full h-full">
          <div className="flex w-full mb-2">
            <div className="my-auto w-3 h-3 border border-green-500 border-opacity-20"></div>
            <div className="my-auto text-sm ml-4">{selectedItem.label}</div>
            <div className="bg-green-500 opacity-20 h-px w-full my-auto mx-4"></div>
          </div>
          <>{children}</>
        </div>
      </div>
      <div className="h-[3.5rem] pt-6 bg-[#050f05] bg-gradient-to-r from-[#061c03] w-full absolute bottom-0 text-[0.75rem] text-[#a7aaa7]">
        <div className="absolute left-[2.5rem] bottom-4">
          <Toggle label="Toggle theme" labelPosition="right" />
        </div>
        <div className="absolute right-[3rem]">
          Copyright @ 2023 ElijahNewcombe.com
        </div>
      </div>
    </div>
  );
}
