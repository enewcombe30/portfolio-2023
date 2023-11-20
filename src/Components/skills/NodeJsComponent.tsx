import { useState } from "react";
import NodeJsLogo from "../../Images/svgs/NodeJsLogo";

export default function NodeJsComponent() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed w-[4rem] h-[4rem]">
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        <NodeJsLogo />
      </div>
      {open && (
        <div className="relative bottom-[6rem] right-[15.5rem] h-content w-[15rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm">
          Node.js
          <ul className="list-disc ml-4 mt-1 ">
            <li>1 year Commercial experience</li>
          </ul>
        </div>
      )}
    </div>
  );
}
