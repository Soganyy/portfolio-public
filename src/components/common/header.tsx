import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import ModeToggle from "./mode-toggle";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="sticky top-7 container mx-auto xl:px-40 w-[100%] z-50">
      <Card className="backdrop-blur-sm bg-background/50 p-2 shadow-none">
        <CardContent className="px-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold">
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
