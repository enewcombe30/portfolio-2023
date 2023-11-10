export default function Homepage() {
  return (
    <div className="pl-[23.5rem] pr-[2rem] my-[2rem] w-full">
      <div className="ml-auto w-fit h-fit flex space-x-3 mb-3">
        <span className="my-auto text-white hover:text-[#cdcbcb] cursor-pointer">
          Download CV
        </span>
        <span className="px-4 py-2 bg-[#21551b] text-white rounded-full hover:text-[#cdcbcb] hover:brightness-90 cursor-pointer">
          Get in touch
        </span>
      </div>
      <div className="w-full h-[3rem] flex">
        <div className="rounded-full p-[0.75rem] my-auto w-10 h-10 border border-[#3af525] border-opacity-20 text-[#3af525]"></div>
        <div className="border border-[#3af525] border-opacity-20 h-0 my-auto ml-3"></div>
      </div>
    </div>
  );
}
