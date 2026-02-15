import Hero from "@/Components/Home/Hero";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Navbar />
      <Hero />
    </div>
  );
}
