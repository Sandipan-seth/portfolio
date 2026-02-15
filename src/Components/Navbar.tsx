import { ArrowUpRight } from "lucide-react";
import localFont from "next/font/local";

const desMontilles = localFont({
  src: "../fonts/DesMontilles-Regular.ttf",
});

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-transparent text-white flex items-center justify-between px-32 py-10">
      <ul className="flex space-x-6 font-medium text-xl">
        <li>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="hover:text-gray-400">
            Projects
          </a>
        </li>
      </ul>

      <div
        className={`text-[56px] font-medium ${desMontilles.className}`}
      >
        Sandipan
      </div>

      <button className="group relative flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium overflow-hidden transition-all duration-300 hover:bg-black hover:text-white border border-white">
        <span className="relative z-10">Let’s Talk</span>
        <ArrowUpRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </nav>
  );
}
