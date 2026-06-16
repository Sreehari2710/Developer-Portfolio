import { NavBar } from "@/components/ui/NavBar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";

export default function Home() {
  return (
    <main className="relative bg-void">
      <NavBar />
      <Hero />
      <About />
    </main>
  );
}
