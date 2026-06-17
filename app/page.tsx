import { NavBar } from "@/components/ui/NavBar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <main className="relative bg-void">
      <NavBar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
