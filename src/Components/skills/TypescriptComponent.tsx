import { useState } from "react";
import TypescriptLogo from "../../Images/svgs/TypescriptLogo";

export default function TypescriptComponent() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed w-[4rem] h-[4rem]">
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        <TypescriptLogo />
      </div>
      {open && (
        <div className="relative bottom-[5.5rem] right-[15.5rem] h-fit w-[15rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm">
          TypeScript
          <ul className="list-disc ml-4 mt-1">
            <li>1 year commercial experience</li>
          </ul>
        </div>
      )}
    </div>
  );
}
