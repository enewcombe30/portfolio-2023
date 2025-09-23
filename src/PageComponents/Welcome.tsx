export default function WelcomePage() {
  return (
    <div className="h-full xs:mx-auto mb-6 ">
      <div className="w-full h-screen py-10 max-w-[60rem] overflow-y-scroll no-scrollbar my-auto w-content">
        <div
          className="my-auto text-green-600"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Hey, I'm Elijah,
        </div>
        <div
          className="my-auto text-green-600"
          style={{
            fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
          }}
        >
          Frontend Web Developer
        </div>
        <div
          className="md:my-10 sm:my-6 xs:my-8"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Javascript<span className="text-green-600"> | </span>Typescript
          <span className="text-green-600"> | </span>TailwindCSS
          <span className="text-green-600"> | </span>React
        </div>
      </div>
    </div>
  );
}
