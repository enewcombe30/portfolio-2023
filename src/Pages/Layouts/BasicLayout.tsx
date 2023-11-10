import { useState } from "react";
import NavBar from "../../Components/NavBar";
import Homepage from "../Homepage/Homepage";

export default function BasicLayout() {
  const [isActive, setIsActive] = useState<string>("introduction");
  return (
    <div className="h-screen w-screen bg-[#050f05]">
      <div className="text-[#cae9ed] flex">
        <NavBar isActive={isActive} setIsActive={setIsActive} />
        <Homepage />
      </div>
    </div>
  );
}
