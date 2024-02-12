import { useState } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Experience from "./Pages/Experience/Experience";
import BasicLayout from "./Pages/Layouts/BasicLayout";
import Skills from "./Pages/Skills/Skills";
import { MenuItem } from "./types/type";
import { MenuItems } from "./constants/menu";

export default function App() {
  const [selectedItem, setSelectedItem] = useState<MenuItem>(MenuItems.menu[0]);
  return (
    <div className="h-full w-full bg-[#050f05]">
      <BasicLayout
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      >
        <>
          {selectedItem.name === "welcome" && <Homepage />}
          {selectedItem.name === "experience" && <Experience />}
          {selectedItem.name === "stack" && <Skills />}
        </>
      </BasicLayout>
    </div>
  );
}
