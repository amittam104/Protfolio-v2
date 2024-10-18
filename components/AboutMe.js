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
      id="about"
      className="mb-24 flex w-full flex-col items-start justify-center bg-neutral-950 px-36 py-24 text-white"
    >
      <p className="mb-2 text-sm text-blue-600">About Me</p>
      <h2 className="mb-12 text-4xl font-light tracking-tight">
        A little more about me
      </h2>
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-12">
        <div className="row-span-2">
          <p className="mb-6">Hi, I&apos;m Amit,</p>
          <p className="mb-6">
            a web developer from India passionate about designing and building
            web applications that people love to use.
          </p>
          <p className="mb-6">
            With over a year of experience, I&apos;ve developed various
            applications that have collectively attracted more than 3,000
            visitors—and counting! In addition to development, I often design
            applications from scratch, ensuring they are both functional and
            visually appealing.
          </p>
          <p className="mb-6">
            Currently, I&apos;m working on BuildnPlay, a platform that gamifies
            the “building in public” process, helping users stay motivated and
            engaged as they work on their projects.
          </p>
          <p>
            If you ever need assistance with development or design, feel free to
            reach out—I&apos;m happy to chat and help!
          </p>
        </div>
        <div className="row-span-2"></div>
      </div>
    </section>
  );
}

export default AboutMe;
