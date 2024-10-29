import AboutMe from "@/components/AboutMe";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <>
      <motion.div
        // animate={{ y: -10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.3 }}
      >
        <Header />
        <Hero />
        <Portfolio />
        <Skills />
        <Services />
        <CTA />
        <AboutMe />
        <Footer />
      </motion.div>
    </>
  );
}
