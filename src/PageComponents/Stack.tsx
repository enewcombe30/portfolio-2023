import { useState } from "react";
import { TechStack } from "../constants/stack";
import StackModal from "../Components/StackModal";
import { StackItem } from "../types/type";

function Stack() {
  const [openModal, setOpenModal] = useState<string>("");
  function renderStack() {
    const stackList = TechStack.stack.map((item: StackItem, index: number) => {
      return (
        <div className="w-fit mx-auto">
          <div
            className={`flex w-[24rem] my-4 cursor-pointer `}
            key={index}
            onClick={() => setOpenModal(item.name)}
          >
            {item.logo}
            <div
              className={`h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
            >
              {item.label}
              <ul className="list-disc ml-4 mt-1 ">
                {item.commercialExp && <li>{item.commercialExp}</li>}
                {item.personalExp && <li>{item.personalExp}</li>}
              </ul>
            </div>
          </div>
        </div>
      );
    });
    return stackList;
  }
  function renderModal() {
    const modal = TechStack.stack.map((item: StackItem, index: number) => {
      return (
        <>
          {openModal === item.name && (
            <div className="">
              <StackModal setOpen={setOpenModal} stackItem={item} key={index} />
            </div>
          )}
        </>
      );
    });
    return modal;
  }
  return (
    <div className="w-content mx-auto h-full mb-[8rem] overflow-y-scroll no-scrollbar">
      <div className="xs:pl-0 md:pl-0 h-content h-full w-content">
        <div className="flex flex-wrap max-w-[75rem] w-content mx-auto pb-[4rem]">
          {renderStack()}
          {renderModal()}
        </div>
      </div>
    </div>
  );
}

export default Stack;
