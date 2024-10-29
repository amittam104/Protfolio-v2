import ConnectButton from "./ConnectButton";
import * as motion from "framer-motion/client";

function Hero() {
  return (
    <>
      <motion.div animate={{ x: 100 }} transition={{ delay: 1 }} />
      <section
        id="hero"
        className="mx-auto mb-28 flex max-w-3xl flex-col items-center justify-center text-center"
      >
        <h1 className="mx-6 mb-8 flex flex-wrap items-center justify-center gap-4 text-5xl lg:text-6xl">
          <span className="font-light tracking-tighter">Design</span>
          <span className="font-light tracking-tighter">Develop</span>
          <span className="font-light tracking-tighter">Deploy</span>
        </h1>
        <p className="mb-10 w-[80%] text-sm text-slate-600 dark:text-slate-300 md:text-base">
          I design and develop web applications and deploy them in weeks not
          months. Building applications that people can use.
        </p>
        <div className="flex items-center gap-4">
          {/* <Button variant="secondary">Know More</Button> */}
          <ConnectButton />
        </div>
      </section>
    </>
  );
}

export default Hero;
