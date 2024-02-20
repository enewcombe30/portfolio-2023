export default function ContactAndCv() {
  return (
    <>
      <div className="w-fit h-fit flex space-x-3">
        <span className="my-auto text-sm xs:hidden sm:block text-[#878686] hover:text-white cursor-pointer">
          Download CV
        </span>
        <span className="px-4 py-2 bg-[#21551b] xs:text-[1.25rem] sm:text-[1rem] text-white rounded-full hover:text-[#cdcbcb] hover:brightness-90 cursor-pointer">
          Get in touch
        </span>
      </div>
    </>
  );
}
