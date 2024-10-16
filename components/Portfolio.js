import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";

function Portfolio() {
  return (
    <section className="mx-auto mb-40 flex max-w-6xl flex-col items-center text-center">
      <div>
        <p className="mb-2 text-sm text-blue-600">Portfolio</p>
        <h2 className="mb-16 text-4xl font-light tracking-tight">
          Explore My Recent Work
        </h2>
        {/* <p className="text-base text-slate-600">
            Here are my latest project / products.
            visitors on them.
          </p> */}
      </div>
      <div className="grid-rows-20 grid w-full grid-cols-2 items-start gap-12">
        <div className="row-span-9 overflow-hidden rounded-2xl shadow-xl">
          <div className="relative h-[28rem] w-full">
            <Image
              src="/BuildnPlay.png"
              fill
              className="h-100 w-full object-cover"
              alt="BuildnPlay.site Homepage"
            />
          </div>
          <div className="flex flex-col items-start p-8 text-left">
            <h3 className="mb-4 text-lg font-semibold">BuildnPlay.site</h3>
            <p className="mb-8 text-sm text-slate-600">
              Write posts, use AI to refine them. Post daily to continue streak,
              continue streak to earn reach levels, reach levels to earn points,
              redeem points to get free AI tokens.
            </p>
            <div className="mb-8 flex gap-3 text-sm">
              <Badge>AI Integration</Badge>
              <Badge>100+ Visitors</Badge>
              <Badge>Auth & Payment</Badge>
            </div>
            <Link href="https://www.buildnplay.site/" target="_blank">
              <Button
                variant="link"
                className="p-0 transition-all delay-100 ease-in-out"
              >
                Visit BuildnPlay →
              </Button>
            </Link>
          </div>
        </div>
        <div className="row-span-7 overflow-hidden rounded-2xl shadow-xl">
          <div className="relative h-72 w-full">
            <Image
              src="/BentoHub.png"
              fill
              className="h-100 w-full object-cover"
              alt="BuildnPlay.site Homepage"
            />
          </div>
          <div className="flex flex-col items-start p-8 text-left">
            <h3 className="mb-4 text-lg font-semibold">BentoHub.online</h3>
            <p className="mb-8 text-sm text-slate-600">
              Build your own bento grid, copy the HTML or Markdown code and
              paste it on to the top of your GitHub Profile readme.
            </p>
            <div className="mb-8 flex gap-3 text-sm">
              <Badge>3K+ Unique Visitors</Badge>
              <Badge>Auto Image gen</Badge>
              <Badge>HTML Canvas</Badge>
            </div>
            <Link href="https://www.bentohub.online/" target="_blank">
              <Button
                variant="link"
                className="p-0 transition-all delay-100 ease-in-out"
              >
                Visit BentoHub →
              </Button>
            </Link>
          </div>
        </div>
        <div className="row-span-9 overflow-hidden rounded-2xl shadow-xl">
          <div className="relative h-72 w-full">
            <Image
              src="/BuildnPlay.png"
              fill
              className="h-100 w-full object-cover"
              alt="BuildnPlay.site Homepage"
            />
          </div>
          <div className="flex flex-col items-start p-8 text-left">
            <h3 className="mb-4 text-lg font-semibold">Pai</h3>
            <p className="mb-8 text-sm text-slate-600">
              Internal Bank management application to handle all the accounts,
              transactions, other data.
            </p>
            <div className="mb-8 flex gap-3 text-sm">
              <Badge>Interactive Dashboard</Badge>
              <Badge>Auth & Payment</Badge>
              <Badge>100+ Visitors</Badge>
            </div>
            <Button
              variant="destructive"
              disabled
              size="xs"
              className="px-2 py-1 text-xs transition-all delay-100 ease-in-out"
            >
              ON HOLD
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
