import { TechStack } from "./constants/stack";

export default function Skills() {
  function renderStack() {
    const stackList = TechStack.stack.map((item, index) => {
      return (
        <>
          <div className="flex w-[24rem] my-4" key={index}>
            {item.logo}
            <div
              className={`relative h-fit min-h-[6rem] w-[18rem] rounded-sm p-3 bg-[#061c03] border border-green-600 border-opacity-10 text-sm`}
            >
              {item.label}
              <ul className="list-disc ml-4 mt-1 ">
                {item.commercialExp && <li>{item.commercialExp}</li>}
                {item.personalExp && <li>{item.personalExp}</li>}
              </ul>
            </div>
          </div>
        </>
      );
    });
    return stackList;
  }
  return (
    <div className="w-full mx-auto h-full mb-[8rem] overflow-y-scroll no-scrollbar">
      <div className="xs:pl-0 md:pl-0 p-8 h-content h-full w-content">
        <div className="flex flex-wrap max-w-[75rem] w-content mx-auto pb-[4rem]">
          {renderStack()}
        </div>
      </div>
    </div>
  );
}
