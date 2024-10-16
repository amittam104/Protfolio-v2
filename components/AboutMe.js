import {
  Atom,
  Database,
  FigmaLogo,
  Monitor,
  PencilCircle,
} from "@phosphor-icons/react/dist/ssr";

function AboutMe() {
  return (
    <section
      id="services"
      className="mb-24 flex w-full flex-col items-start justify-center bg-neutral-950 px-24 py-24 text-white"
    >
      <p className="mb-2 text-sm text-blue-600">About Me</p>
      <h2 className="mb-12 text-4xl font-light tracking-tight">
        A little more about me
      </h2>
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-12">
        <div className="row-span-2">
          <p className="mb-6">Hey, I&apos;m Amit</p>
          <p className="mb-6">
            Web Developer from India who is designing and building web
            applications that people can use.
          </p>
          <p className="mb-6">
            I have been building different applications from more than a year.
            Some of them have collectively got more than 3000 visitors and
            counting. Along with the development I have also found myself
            designing the applications from scratch.
          </p>
          <p>
            Right now I am working on this project called
            &apos;BuildnPlay&apos;, which is an app to gamify the building in
            public process.
          </p>
        </div>
        <div className="row-span-2"></div>
      </div>
    </section>
  );
}

export default AboutMe;
