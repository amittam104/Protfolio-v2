import ConnectButton from "./ConnectButton";

function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto mb-40 flex max-w-3xl flex-col items-center justify-center text-center"
    >
      <h1 className="mb-8 flex flex-wrap items-center justify-center gap-8 text-6xl">
        <span className="font-light tracking-tighter">Design</span>
        <span className="font-light tracking-tighter">Develop</span>
        <span className="font-light tracking-tighter">Deploy</span>
      </h1>
      <p className="mb-10 w-[80%] text-base text-slate-600">
        I design and develop web applications and deploy them in weeks not
        months (Focused on Frontend Development)
      </p>
      <div className="flex items-center gap-4">
        {/* <Button variant="secondary">Know More</Button> */}
        <ConnectButton />
      </div>
    </section>
  );
}

export default Hero;
