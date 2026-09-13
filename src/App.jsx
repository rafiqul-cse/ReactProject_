import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/StackSidebar";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setTechnologies(data);
      })
      .catch(() => {
        if (isMounted) toast.error("Could not load technology data.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const stackIds = new Set(stack.map((tech) => tech.id));

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(tech) {
    setStack((prev) => prev.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("Stack cleared.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="mt-2 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <TechnologyGrid
            technologies={technologies}
            loading={loading}
            stackIds={stackIds}
            onAdd={handleAdd}
          />
          <StackSidebar
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={2500} pauseOnHover newestOnTop />
    </div>
  );
}

export default App;