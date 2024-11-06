import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Resume from "@/app/components/Resume";
import Project from "@/app/components/Project";
import Skills from "@/app/components/Skills";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main className="font-sans">
        <div className="bg-dotted-spacing-10 bg-dotted-secondary">
            <Header/>
            <Hero/>
        </div>

        <Resume/>
        <Project/>
        <Skills/>
        <Contact />
        <Footer />
    </main>
  );
}
