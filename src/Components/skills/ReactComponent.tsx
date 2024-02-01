import { useState } from "react";
import ReactLogo from "../../Images/svgs/ReactLogo";

interface props {
  tipPosition?: string;
}

export default function ReactComponent({ tipPosition }: props) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed w-[4rem] h-[4rem]">
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        <ReactLogo />
      </div>
      {open && (
        <div
          className={`relative h-content ${tipPosition} w-[14.5rem] rounded-sm p-2 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
        >
          React
          <ul className="list-disc ml-4 mt-1 ">
            <li>1 year Commercial experience</li>
          </ul>
        </div>
      )}
    </div>
  );
}
