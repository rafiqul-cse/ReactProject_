import banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-sans text-4xl font-extrabold leading-[1.1] text-ink-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="brand-gradient-bg rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-pink/30 transition-transform hover:scale-[1.03]"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={banner}
            alt="Isometric illustration of a layered technology stack"
            className="w-64 sm:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
}
