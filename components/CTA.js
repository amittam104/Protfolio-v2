import { Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";

function CTA() {
  return (
    <section
      id="cta"
      className="mx-auto mb-40 flex max-w-6xl flex-col items-center text-center"
    >
      <div className="mb-4">
        <p className="mb-2 text-sm text-blue-600">Skills</p>
        <h2 className="text-4xl font-light tracking-tight">
          Let&apos;s build something amazing, together
        </h2>
      </div>
      <p className="mb-10 w-[40%] text-base text-slate-600">
        You don&apos;t have to fill any form, just hop on a 15-30 min call. Or
        you can email me on amittambulkar104@gmail.com
      </p>
      <div className="flex items-center gap-4">
        <Button className="flex items-center gap-2">
          Let&apos;s Connect
          <Phone size={20} />
        </Button>
      </div>
    </section>
  );
}

export default CTA;
