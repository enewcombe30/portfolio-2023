export default function ContactAndCv() {
  return (
    <>
      <div className="w-fit h-fit flex space-x-3">
        {/* <span
          onClick={() =>
            window.open("/ElijahCV2024.pdf", "_blank", "noopener,noreferrer")
          }
          className="my-auto text-sm xs:hidden sm:block text-[#878686] hover:text-white cursor-pointer"
        >
          View CV
        </span> */}
        <a href="mailto:enewcombe30@gmail.com">
          <span className="px-4 py-2 bg-[#21551b] xs:text-[1.25rem] sm:text-[1rem] text-white rounded-full hover:text-[#cdcbcb] hover:brightness-90 cursor-pointer">
            Get in touch
          </span>
        </a>
      </div>
    </>
  );
}
