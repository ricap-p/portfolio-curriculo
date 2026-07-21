import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Technologies />

        <Projects />

        <Experience />

        <Certificates />

        <Footer />
      </main>
    </>
  );
}

export default App;