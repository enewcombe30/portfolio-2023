import { useState } from "react";
import HtmlLogo from "../../Images/svgs/HtmlLogo";

export default function HtmlComponent() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed w-[4rem] h-[4rem]">
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        <HtmlLogo />
      </div>
      {open && (
        <div className="relative xl:bottom-[7.5rem] xl:left-[5rem] lg:right-[2.5rem] lg:bottom-[10.5rem] h-content w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm">
          HTML5
          <ul className="list-disc ml-4 mt-1 ">
            <li>1 year Commercial experience</li>
            <li>2 years Personal project experience</li>
          </ul>
        </div>
      )}
    </div>
  );
}
