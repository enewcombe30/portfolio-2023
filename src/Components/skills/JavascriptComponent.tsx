import { useState } from "react";
import JavascriptLogo from "../../Images/svgs/JavascriptLogo";

export default function JavascriptComponent() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed w-[4rem] h-[4rem]">
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        <JavascriptLogo />
      </div>
      {open && (
        <div className="relative bottom-[7.5rem] right-[18rem] h-content w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm">
          JavaScript
          <ul className="list-disc ml-4 mt-1 ">
            <li>1 year Commercial experience</li>
            <li>2 years Personal project experience</li>
          </ul>
        </div>
      )}
    </div>
  );
}
