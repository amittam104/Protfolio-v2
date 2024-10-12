import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <section
        id="hero"
        className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center"
      >
        <h1 className="mb-6 flex items-center justify-center gap-8 text-6xl">
          <span>Design</span>
          <span>Develop</span>
          <span>Deploy</span>
        </h1>
        <p className="mb-8 w-[80%] text-base text-slate-600">
          I design and develop web applications and deploy them in weeks not
          months (Focused on Frontend Development)
        </p>
        <div className="flex items-center gap-4">
          <Button variant="secondary">
            Know More
          </Button>
          <Button>Let&apos;s Connect</Button>
        </div>
      </section>
    </div>
  );
}
