import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function Skills() {
  return (
    <section className="mx-auto mb-40 flex max-w-6xl flex-col items-center text-center">
      <div>
        <p className="mb-2 text-sm text-blue-600">Skills</p>
        <h2 className="mb-16 text-4xl font-light tracking-tight">
          Skills you are looking for
        </h2>
      </div>
      <div className="grid w-full grid-cols-10 gap-x-12">
        <div className="col-span-7 h-80 w-full rounded-2xl bg-slate-200">
          <svg viewBox="0 0 128 128" height={60} width={60}>
            <path
              fill="#64748b"
              d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
            ></path>
            <path
              fill="#64748b"
              d="M64 116.8l36.378-10.086 8.559-95.878H64z"
            ></path>
            <path
              fill="#EBEBEB"
              d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
            ></path>
            <path
              fill="#fff"
              d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
            ></path>
          </svg>
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="mix-blend-mode:luminosity">
              <path
                d="M4.93939 1.09375L10.4109 62.3946L34.9634 69.1764L59.5837 62.4023L65.0606 1.09375H4.93939ZM53.6802 15.6073L53.3373 19.5295L53.1864 21.3281H24.3852L25.0726 28.9844H52.5017L52.3179 30.8826L50.5499 50.6352L50.4197 51.8766L35 56.1143V56.1154L34.9814 56.1252L19.5721 52.0658L18.526 40.4688H26.081L26.6164 46.4401L34.9765 48.6719H35V48.3733L43.3973 46.2541L44.2745 36.6406H18.1896L16.3396 15.7954L16.1596 13.6719H53.8606L53.6802 15.6073Z"
                fill="#5E5E5E"
              />
            </g>
          </svg>
        </div>
        <div className="col-span-3 h-80 w-full rounded-2xl bg-slate-200">2</div>
      </div>
    </section>
  );
}

export default Skills;
