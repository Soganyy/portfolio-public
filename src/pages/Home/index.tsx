import Hero from "./Hero";
import Me from "./Me";
import { Separator } from "@/components/ui/separator";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500 opacity-15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10">
        <div className="container mx-auto xl:px-40">
          <Hero />
        </div>
        <Separator
          decorative
          orientation="horizontal"
          className="my-4"
        />
        <div className="container mx-auto xl:px-40">
          <Me />
        </div>
        <Separator
          decorative
          orientation="horizontal"
          className="my-4"
        />

        <div className="container mx-auto xl:px-40">
          <Contact />
        </div>
      </div>
    </div>
  );
}
