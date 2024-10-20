import { Button } from "@/components/ui/button";
import { LinkedinLogo, Phone, XLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mx-6 mb-12 flex flex-col items-center justify-between md:mx-8 md:max-w-4xl md:flex-row lg:mx-auto lg:max-w-6xl">
      <div className="mb-6 flex items-center gap-4 md:mb-0">
        <Image
          width={32}
          height={32}
          src="/amit.png"
          alt="Amit Tambulkar photo"
        />
        <p className="text-sm">Amit Tambulkar</p>
      </div>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <nav>
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <Link href="#header">Home</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/amittambulkar/"
            target="_blank"
            className="transition-colors delay-75 ease-in-out hover:text-blue-600"
          >
            <LinkedinLogo size={22} />
          </Link>
          <Link
            href="https://x.com/attambulkar"
            target="_blank"
            className="transition-colors delay-75 ease-in-out hover:text-blue-600"
          >
            <XLogo size={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
