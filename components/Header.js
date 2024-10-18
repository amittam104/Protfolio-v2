import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BriefcaseMetal,
  ChartLine,
  House,
  LinkedinLogo,
  List,
  Package,
  ShoppingCart,
  Users,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import ConnectButton from "./ConnectButton";

function Header() {
  return (
    <header
      id="header"
      className="mx-4 my-6 mb-40 flex items-center justify-between md:mx-auto md:max-w-6xl"
    >
      <div className="flex items-center gap-4">
        <Image
          width={32}
          height={32}
          src="/amit.png"
          alt="Amit Tambulkar photo"
        />
        <p className="text-sm">Amit Tambulkar</p>
      </div>
      <div className="hidden items-center gap-8 md:flex">
        <nav>
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
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
        <div>
          <ConnectButton />
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <List className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="mb-3 flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                width={32}
                height={32}
                src="/amit.png"
                alt="Amit Tambulkar photo"
              />
              <span className="sr-only">Amit Tambulkar</span>
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <House weight="duotone" className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <BriefcaseMetal weight="duotone" className="h-5 w-5" />
              Portfolio
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Package weight="duotone" className="h-5 w-5" />
              Skills
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Users weight="duotone" className="h-5 w-5" />
              Areas
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <ChartLine weight="duotone" className="h-5 w-5" />
              About Me
            </Link>
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Let&apos;s have a Chat</CardTitle>
                <CardDescription>
                  If you ever need assistance with development or design, feel
                  free to reach out—I&apos;m happy to chat and help!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ConnectButton />
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
