export default function SkillPath() {
  return (
    <>
      <div className="h-full w-full">
        <div className="flex w-full">
          <div className="h-24 w-[20%] border-t-[2rem] border-double border-green-500 border-opacity-10"></div>
          <div className="border-t-[2rem] border-double border-green-500 border-opacity-10 h-24 w-[60%]"></div>
          <div className="border-t-[2rem] border-r-[2rem] border-double border-green-500 border-opacity-10 rounded-tr-full h-24 w-[20%]"></div>
        </div>
        <div className="flex w-full">
          <div className="h-16 w-[20%]"></div>
          <div className="border-b-[2rem] border-double border-green-500 border-opacity-10 h-24 w-[60%]"></div>
          <div className="border-b-[2rem] border-r-[2rem] border-double border-green-500 border-opacity-10 rounded-br-full h-24 w-[20%]"></div>
        </div>
        <div className="flex w-full">
          <div className="h-52 w-[20%] border-t-[2rem] border-l-[2rem] border-double border-green-500 border-opacity-10 rounded-tl-full"></div>
        </div>
      </div>
    </>
  );
}
