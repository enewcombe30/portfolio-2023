export default function Header() {
  return (
    <>
      <div className="right-[2rem] top-[2rem] absolute">
        <div className="ml-auto w-fit h-fit flex space-x-3 mb-3">
          <span className="my-auto text-white hover:text-[#cdcbcb] cursor-pointer">
            Download CV
          </span>
          <span className="px-4 py-2 bg-[#21551b] text-white rounded-full hover:text-[#cdcbcb] hover:brightness-90 cursor-pointer">
            Get in touch
          </span>
        </div>
      </div>
    </>
  );
}
