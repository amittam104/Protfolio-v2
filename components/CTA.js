import { LinkedinLogo, Phone, XLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import ConnectButton from "./ConnectButton";
import Link from "next/link";

function CTA() {
  return (
    <section
      id="cta"
      className="mx-auto mb-20 flex max-w-6xl flex-col items-center text-center lg:mb-40"
    >
      <div className="mb-4">
        <p className="mb-2 text-sm text-blue-600">Your Action</p>
        <h2 className="text-4xl font-light tracking-tight">
          Let&apos;s build something amazing, together
        </h2>
      </div>
      <p className="mx-6 mb-4 text-base text-slate-600 md:w-[40%]">
        You don&apos;t have to fill any form, just hop on a 15-30 min call. or
        connect with me on any of these social sites.
        {/* Or you can email me on amittambulkar104@gmail.com */}
      </p>
      <div className="mb-10 flex items-center gap-8">
        <Link
          href="https://www.linkedin.com/in/amittambulkar/"
          target="_blank"
          className="transition-colors delay-75 ease-in-out hover:text-blue-600"
        >
          <LinkedinLogo size={28} />
        </Link>
        <Link
          href="https://x.com/attambulkar"
          target="_blank"
          className="transition-colors delay-75 ease-in-out hover:text-blue-600"
        >
          <XLogo size={28} />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ConnectButton />
      </div>
    </section>
  );
}

export default CTA;
