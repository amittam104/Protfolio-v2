import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section className="mx-auto mb-40 flex max-w-7xl flex-col items-center text-center">
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
        <div className="grid w-full grid-cols-2 gap-x-12">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-80 w-full">
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
                Write posts, use AI to refine them. Post daily to continue
                streak, continue streak to earn reach levels, reach levels to
                earn points, redeem points to get free AI tokens.
              </p>
              <div className="mb-8 flex gap-3 text-sm">
                <Badge>AI Integration</Badge>
                <Badge>Auth & Payment</Badge>
                <Badge>100+ Visitors</Badge>
              </div>
              <Button
                variant="link"
                className="p-0 transition-all delay-100 ease-in-out"
              >
                Visit BuildnPlay →
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-orange-600">2</div>
        </div>
      </section>
    </>
  );
}
