import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Competitions from "@/components/Competitions";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Research />
        <Publications />
        <Education />
        <Competitions />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
