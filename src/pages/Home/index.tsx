import Hero from "./Hero";
import Me from "./Me";
import { Separator } from "@/components/ui/separator";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500 opacity-15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10">
        <Hero />
        <Separator
          decorative
          orientation="horizontal"
          className="my-4"
        />

        <Me />
        <Separator
          decorative
          orientation="horizontal"
          className="my-4"
        />

        <Contact />
      </div>
    </div>
  );
}
