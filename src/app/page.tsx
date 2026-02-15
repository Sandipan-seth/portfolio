import Hero from "@/Components/Home/Hero";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <Hero />
      <div className="bg-white text-black w-full h-screen" >
        Next page
      </div>
    </div>
  );
}
