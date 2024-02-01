export default function DoubleLineDecoration() {
  return (
    <>
      <div className="flex w-full">
        <div className="w-[5%] h-24 mr-2">
          <div className="my-auto w-3 h-3 bg-green-500 opacity-10 rounded-sm mb-2"></div>
          <div className="my-auto w-3 h-3 bg-green-500 opacity-10 rounded-sm"></div>
        </div>
        <div className="h-24 w-[15%] border-t-[2rem] border-double border-green-500 border-opacity-10"></div>
        <div className="border-t-[2rem] border-double border-green-500 border-opacity-10 h-24 w-[60%]"></div>
        <div className="border-t-[2rem] border-r-[2rem] border-double border-green-500 border-opacity-10 rounded-tr-full h-24 w-[20%]"></div>
      </div>
      <div className="flex w-full">
        <div className="h-16 w-[20%]"></div>
        <div className="border-b-[2rem] border-double border-green-500 border-opacity-10 h-24 w-[60%]"></div>
        <div className="border-b-[2rem] border-r-[2rem] border-double border-green-500 border-opacity-10 rounded-br-full h-24 w-[20%]"></div>
      </div>
      <div className="flex w-full relative">
        <div className="h-48 w-[20%] border-t-[2rem] border-l-[2rem] border-b-[2rem] border-double border-green-500 border-opacity-10 rounded-l-full relative top-[-2rem]"></div>
        <div className="border-b-[2rem] border-double border-green-500 border-opacity-10 mt-16 h-24 w-[60%]"></div>
      </div>
      <div className="flex w-full relative top-[-2rem]">
        <div className="h-16 w-[20%]"></div>
        <div className="border-b-[2rem] border-double border-green-500 border-opacity-10 mt-16 h-24 w-[60%]"></div>
        <div className="h-48 w-[20%] border-t-[2rem] border-r-[2rem] border-b-[2rem] border-double border-green-500 border-opacity-10 rounded-r-full relative top-[-2rem]"></div>
      </div>
      <div className="flex w-full relative top-[-4rem]">
        <div className="h-48 w-[20%] border-t-[2rem] border-l-[2rem] border-b-[2rem] border-double border-green-500 border-opacity-10 rounded-l-full relative top-[-2rem]"></div>
        <div className="border-b-[2rem] border-double border-green-500 border-opacity-10 mt-16 h-24 w-[75%]"></div>
        <div className="w-[5%] h-24 mt-32 ml-2">
          <div className="my-auto w-3 h-3 bg-green-500 opacity-10 rounded-sm mb-2"></div>
          <div className="my-auto w-3 h-3 bg-green-500 opacity-10 rounded-sm"></div>
        </div>
      </div>
    </>
  );
}
