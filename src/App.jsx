import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <AnimatePresence>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
    </AnimatePresence>
  );
}
