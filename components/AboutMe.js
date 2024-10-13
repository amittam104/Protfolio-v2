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
      <p className="mb-2 text-sm text-blue-600">Areas</p>
      <h2 className="mb-12 text-4xl font-light tracking-tight">
        I can help with you
      </h2>
      <div>
        <ul className="space-y-10 font-light">
          <li className="flex items-center gap-2">
            <Monitor size={22} className="mr-1 text-yellow-600" />
            <span className="font-medium">Websites </span>
            <p> - HTML, CSS and JavaScript</p>
          </li>
          <li className="flex items-center gap-2">
            <Atom size={22} className="mr-1 text-blue-600" />
            <span className="font-medium">Frontend </span>
            <p>
              - React, Tailwind CSS, Redux / Con mr-1 text API, React Query etc.
            </p>
          </li>
          <li className="flex items-center gap-2">
            <Database size={22} className="mr-1 text-neutral-800" />
            <span className="font-medium">Full Stack </span>
            <p>- Next JS, Tailwind CSS, DB, Auth, Payment, AI integration</p>
          </li>
          <li className="flex items-center gap-2">
            <PencilCircle size={22} className="mr-1 text-purple-600" />
            <span className="font-medium">Web Design </span>

            <p>
              - Website Landing Design, Web application design and copywriting
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
