import { useState } from "react";
import WelcomePage from "./Pages/Welcome/Welcome";
import Experience from "./Pages/Experience/Experience";
import BasicLayout from "./Pages/Layouts/BasicLayout";
import Stack from "./Pages/Stack/Stack";
import { MenuItem } from "./types/type";
import { MenuItems } from "./constants/menu";
import Projects from "./Pages/Projects/Projects";

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
          {selectedItem.name === "stack" && <Stack />}
          {selectedItem.name === "projects" && <Projects />}
        </>
      </BasicLayout>
    </div>
  );
}
