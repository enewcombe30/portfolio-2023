import { useState } from "react";
import GithubLogo from "../../Images/svgs/GithubLogo";

interface props {
  tipPosition?: string;
}

export default function GitHubComponent({ tipPosition }: props) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed w-[4rem] h-[4rem]">
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        <GithubLogo />
      </div>
      {open && (
        <div
          className={`relative ${tipPosition} h-content w-[17rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
        >
          GitHub
          <ul className="list-disc ml-4 mt-1 ">
            <li>1 year Commercial experience</li>
            <li>2 year Personal project experience</li>
          </ul>
        </div>
      )}
    </div>
  );
}
