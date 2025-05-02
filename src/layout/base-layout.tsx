import Header from "@/components/common/header";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "@/stores/theme-provider";
import { useEffect, useState } from "react";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative">
      <div>{children}</div>

      <header className="fixed bottom-5 left-0 right-0 z-50">
        <Header />
      </header>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        color={color}
        ease={80}
        refresh
      />
    </div>
  );
}
