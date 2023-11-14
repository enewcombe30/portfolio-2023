import { useState } from "react";

interface props {
  label: string;
  labelPosition?: string;
}

export default function Toggle({ label, labelPosition }: props) {
  const [enabled, setEnabled] = useState<boolean>(false);
  return (
    <>
      <div className="w-content flex">
        <div
          className={`my-auto mr-2 text-xs text-[#878c8d] hidden ${
            labelPosition === "left" && "!block"
          }`}
        >
          {label}
        </div>
        <div
          className="w-[4rem] h-[2rem] pl-1 pt-[0.2rem] rounded-full bg-[#091a09] border border-green-950 cursor-pointer"
          onClick={() => setEnabled(!enabled)}
        >
          <div
            className={`my-auto h-[1.5rem] w-[1.5rem] rounded-full bg-[#21551b] relative  transition-transform ${
              enabled && "translate-x-[1.9rem]"
            }`}
          ></div>
        </div>
        <div
          className={`my-auto ml-2 text-xs text-[#878c8d] hidden ${
            labelPosition === "right" && "!block"
          }`}
        >
          {label}
        </div>
      </div>
    </>
  );
}
