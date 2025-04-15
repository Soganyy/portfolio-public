import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import ModeToggle from "./mode-toggle";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="sticky top-7 container mx-auto px-4 w-[100%] z-50">
      <Card className="backdrop-blur-xs bg-background/30 p-2 shadow-xl">
        <CardContent className="px-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              <img
                src={logo}
                alt="Sogan"
                height={20}
                width={20}
                className="me-4"
              />
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
            </div>

            <div className="flex items-center">
              <ModeToggle />
            </div>
          </div>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
