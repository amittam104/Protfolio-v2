import { Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto mb-40 flex max-w-3xl flex-col items-center justify-center text-center"
    >
      <h1 className="mb-8 flex items-center justify-center gap-8 text-6xl">
        <span className="font-light tracking-tighter">Design</span>
        <span className="font-light tracking-tighter">Develop</span>
        <span className="font-light tracking-tighter">Deploy</span>
      </h1>
      <p className="mb-10 w-[80%] text-base text-slate-600">
        I design and develop web applications and deploy them in weeks not
        months (Focused on Frontend Development)
      </p>
      <div className="flex items-center gap-4">
        <Button variant="secondary">Know More</Button>
        <Link href="https://cal.com/amittambulkar/30min" target="_blank">
          <Button className="flex items-center gap-2">
            Let&apos;s Connect
            <Phone size={20} />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
