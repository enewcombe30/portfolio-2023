import { useState } from "react";
import WordpressLogo from "../../constants/Svgs/WordpressLogo";

interface props {
  tipPosition?: string;
}

export default function WordpressComponent({ tipPosition }: props) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed w-[4rem] h-[4rem]">
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        <WordpressLogo />
      </div>
      {open && (
        <div
          className={`relative ${tipPosition}  lg:p-2 h-content min-w-[19.15rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
        >
          Wordpress
          <ul className="list-disc ml-4 mt-1 ">
            <li>1 year Commercial experience</li>
            <li>Maintaining 6 high-end audio businesses</li>
          </ul>
        </div>
      )}
    </div>
  );
}
