import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Visitors from "@/components/Visitors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <News />
        <Education />
        <Experience />
        <Research />
        <Publications />
        <Visitors />
      </main>
      <Footer />
    </>
  );
}
