export default function Homepage() {
  return (
    <div className="h-full xs:mx-auto mb-6 ">
      <div className="w-full h-full xs:px-6 sm:px-12 py-10 text-lg max-w-[60rem] mx-auto overflow-y-scroll no-scrollbar">
        <p className="text-[2.5rem] leading-[2.75rem] xs:mb-4 sm:mb-6 flex">
          Hey, I'm Elijah, a Junior Web Developer
        </p>
        <p className="text-[1.5rem]">
          Combining Javascript, Typescript, TailwindCSS and React to bring
          websites to life!
        </p>
        <div className="bg-green-500 opacity-5 h-px w-full my-auto xs:my-4 sm:my-6"></div>
        {/* Move this section to the About page */}
        {/* <div className="text-[#cdcbcb] space-y-4 pb-20">
          <p>
            Front End Web Developer certified with an MTA qualification in C#
            Fundamentals. Producing clean, maintainable and re-usable code.
          </p>
          <p>
            Junior Developer having spent the past year working with a small
            start-up company called fern building automated IFTTT software for
            Amazon Ad Agencies. During my time at fern, I gained hands on
            experience using React.JS, TailwindCSS, Javascript, Typescript,
            Cypress and Node.JS and am now looking to build on these skills in
            my next role.
          </p>
          <p>
            I have spent the majority of my professional life in a customer
            orientated environment and thrive when working as part of a team. My
            previous career in hospitality management has given me an excellent
            work ethic, flexibility and keen problem solving skills which have
            proved vital traits as a Developer.
          </p>
          <div className="bg-green-500 opacity-5 h-px w-full my-auto xs:mt-6 sm:mt-12"></div>
        </div> */}
      </div>
    </div>
  );
}
