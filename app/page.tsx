import About from "./components/About";
import Blog from "./components/Blog";
import Channels from "./components/Channels";
import Contact from "./components/Contact";
import Files from "./components/Files";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Blog />
        <Files />
        <Channels />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
