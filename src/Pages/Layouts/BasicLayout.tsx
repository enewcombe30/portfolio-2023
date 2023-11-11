import { useState } from "react";
import Menu from "../../Components/Menu";
import Homepage from "../Homepage/Homepage";
import Header from "../../Components/Header";

export default function BasicLayout() {
  const [isActive, setIsActive] = useState<string>("introduction");
  return (
    <div className="h-full w-screen bg-[#050f05] fixed pl-[23.5rem] pr-52">
      <div className=" text-[#f0f5f0] flex">
        <Header />
        <Menu isActive={isActive} setIsActive={setIsActive} />
        <div className="mt-[4rem]">
          <Homepage />
        </div>
      </div>
    </div>
  );
}
