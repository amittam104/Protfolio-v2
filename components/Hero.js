"use client";

import ConnectButton from "./ConnectButton";
import { motion } from "motion/react";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, transition: { duration: 1, y: 10 } }}
      viewport={{ once: true }}
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
    </motion.section>
  );
}

export default Hero;
