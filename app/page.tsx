import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="main-container w-full h-full">
      <Navbar />
      <Hero />
    </main>
  );
}
