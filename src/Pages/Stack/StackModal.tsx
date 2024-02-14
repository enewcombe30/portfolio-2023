import { StackItem } from "../../types/type";
import CrossIcon from "./constants/Svgs/CrossIcon";

interface props {
  stackItem: StackItem;
  setOpen: (open: string) => void;
}

export default function StackModal({ stackItem, setOpen }: props) {
  return (
    <>
      <div
        className="h-screen w-screen bg-[#050f05] bg-opacity-70 fixed top-0 left-0"
        onClick={() => setOpen("")}
      >
        <div className="w-fit h-fit p-4 z-60 bg-[#061c03] border-2 border-green-600 border-opacity-10 mx-auto mt-[10%] rounded">
          <div
            className="cursor-pointer relative left-[22.5rem]"
            onClick={() => setOpen("")}
          >
            <CrossIcon />
          </div>
          <div className="flex w-[24rem] mb-4">
            {stackItem.logo}
            <div
              className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 text-sm`}
            >
              <div className="flex">
                {stackItem.label}
                <div className="bg-green-500 opacity-20 h-px w-full my-auto mx-4"></div>
              </div>
              <div className="my-2">{stackItem.description}</div>
              <ul className="list-disc ml-4 mt-1 ">
                {stackItem.commercialExp && <li>{stackItem.commercialExp}</li>}
                {stackItem.personalExp && <li>{stackItem.personalExp}</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
