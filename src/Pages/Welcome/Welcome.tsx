export default function WelcomePage() {
  return (
    <div className="h-full xs:mx-auto mb-6 ">
      <div className="w-full h-screen py-10 max-w-[60rem] overflow-y-scroll no-scrollbar my-auto w-content">
        <div className="xs:text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] my-auto">
          Hey, I'm Elijah,
        </div>
        <div className="xs:text-[2.25rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[4.5rem] my-auto text-green-600">
          Frontend Web Developer
        </div>
        <div className="xs:text-[0.825rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.1] md:my-10 sm:my-6 xs:my-8">
          Combining Javascript, Typescript, TailwindCSS and React to bring
          websites to life!
        </div>
      </div>
    </div>
  );
}
