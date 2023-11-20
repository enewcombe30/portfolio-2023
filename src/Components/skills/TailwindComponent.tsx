import { useState } from "react";
import TailwindLogo from "../../Images/svgs/TailwindLogo";

export default function TailwindComponent() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed w-[4.5rem] h-[3.5rem]">
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        <TailwindLogo />
      </div>
      {open && (
        <div className="absolute top-[1.75rem] left-[6.5rem] h-content w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm">
          TailwindCSS
          <ul className="list-disc ml-4 mt-1 ">
            <li>1 year Commercial experience</li>
          </ul>
        </div>
      )}
    </div>
  );
}
