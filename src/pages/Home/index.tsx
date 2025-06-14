import { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";
import Hero from "./Hero";
import Me from "./Me";
import { useTheme } from "@/stores/theme-provider";
import Blog from "./Blog";

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        color={color}
        ease={80}
        refresh
      />
      {/* <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500 opacity-15 rounded-full blur-3xl pointer-events-none z-0" /> */}

      <div className="relative z-10">
        <div className="container mx-auto xl:px-40">
          <Hero />
        </div>

        <div className="container mx-auto xl:px-40">
          <Me />

          <Blog />
        </div>
      </div>
    </>
  );
}
