import { useState } from "react";
import WelcomePage from "./Pages/Welcome/Welcome";
import Experience from "./Pages/Experience/Experience";
import BasicLayout from "./Pages/Layouts/BasicLayout";
import Skills from "./Pages/Stack/Stack";
import About from "./Pages/About/About";
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
          {selectedItem.name === "welcome" && <WelcomePage />}
          {selectedItem.name === "experience" && <Experience />}
          {selectedItem.name === "stack" && <Skills />}
          {selectedItem.name === "about" && <About />}
        </>
      </BasicLayout>
    </div>
  );
}
