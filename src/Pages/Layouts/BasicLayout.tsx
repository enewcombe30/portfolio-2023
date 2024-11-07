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
    <div className={`w-full bg-[#050f05] bg-gradient-to-r from-[#4c8e43]`}>
      <div className="border border-green-500 opacity-10 h-[6rem] w-[6rem] my-auto fixed left-[-3rem] top-[-1.25rem] transform rotate-45"></div>
      <div className="border border-green-500 opacity-10 h-[6rem] w-[6rem] my-auto fixed left-[-2rem] top-[25rem] transform rotate-45"></div>
      <div className="border border-green-500 opacity-10 h-[6rem] w-[6rem] my-auto fixed right-[-5rem] top-[8rem] transform rotate-45"></div>
      <div className="border border-green-500 opacity-10 h-[5rem] w-[5rem] my-auto fixed right-[-2rem] bottom-[4.75rem] transform rotate-45"></div>
      <div className=" text-[#f0f5f0] h-full w-full fixed top-0">
        <div
          className={`xs:block sm:hidden md:hidden xl:hidden fixed left-6 top-12`}
        >
          <MobileMenu
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
        <div className="xs:right-8 xs:top-12 sm:right-12 sm:top-12 fixed">
          <ContactAndCv />
        </div>
        <div className="xs:hidden sm:block md:block xl:block max-w-[32rem] fixed">
          <Menu selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
        <div className="xs:pt-[6rem] sm:pt-[6rem] w-full h-full bg-[#050f05]">
          <div className="flex w-full mb-2 sm:ml-[12rem] xs:ml-[2.5rem]">
            <div className="my-auto w-3 h-3 border border-green-500 border-opacity-20 rounded-sm "></div>
            <div className="my-auto text-sm ml-2">
              {selectedItem.label || ""}
            </div>
            <div className="bg-green-500 opacity-20 h-px w-full my-auto mx-4"></div>
          </div>
          <div className="max-h-screen h-full mx-auto sm:ml-[12rem] sm:mr-[4rem] xs:ml-[2.5rem] xs:mr-[1rem] py-[2rem]">
            {children}
          </div>
        </div>
      </div>
      <div className="h-[3.5rem] pt-6 bg-[#050f05] bg-gradient-to-r from-[#061c03] w-full fixed bottom-0 text-[0.75rem] text-[#a7aaa7]">
        <div className="absolute left-[2.5rem] bottom-4 xs:hidden sm:block">
          {/* <Toggle label="Toggle theme" labelPosition="right" /> */}
        </div>
        <div className="absolute right-[3rem]">
          Copyright @ 2023 ElijahNewcombe.com
        </div>
      </div>
    </div>
  );
}
