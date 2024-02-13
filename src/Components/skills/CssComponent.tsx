import { useState } from "react";
import CssLogo from "../../Pages/Stack/constants/Svgs/CssLogo";

interface props {
  tipPosition?: string;
}

export default function CssComponent({ tipPosition }: props) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed w-[4rem] h-[4rem]">
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        <CssLogo />
      </div>
      {open && (
        <div
          className={`relative ${tipPosition} h-content w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm ease-in-out duration-700 transition-opacity`}
        >
          CSS3
          <ul className="list-disc ml-4 mt-1 ">
            <li>1 year Commercial experience</li>
            <li>2 years Personal project experience</li>
          </ul>
        </div>
      )}
    </div>
  );
}
