import bgImage from "../../assets/HomeAssets/bg.png";

export default function Home() {
  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ];
  return (
    <>
      <div>
        <img
          src={bgImage.src}
          alt="Background"
          className="w-full h-screen object-cover absolute top-0 left-0 -z-10"
        />
      </div>
      <div className="bg-black/50 text-white w-full h-screen flex items-center justify-center bg-cover bg-center">
        {/* <h1 className="text-4xl font-bold">Hello, Hero!</h1> */}

        






      
      </div>
    </>
  );
}
