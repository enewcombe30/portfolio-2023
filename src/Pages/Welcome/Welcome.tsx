export default function WelcomePage() {
  return (
    <div className="h-full xs:mx-auto mb-6 ">
      <div className="w-full h-screen py-10 max-w-[60rem] overflow-y-scroll no-scrollbar my-auto w-content">
        <div className="xs:text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] my-auto">
          Hey, I'm Elijah,
        </div>
        <div className="xs:text-[2.25rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[4.5rem] my-auto text-green-600">
          Junior Web Developer
        </div>
        <div className="xs:text-[0.825rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.1] md:my-10 sm:my-6 xs:my-8">
          Combining Javascript, Typescript, TailwindCSS and React to bring
          websites to life!
        </div>
      </div>
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
  );
}
