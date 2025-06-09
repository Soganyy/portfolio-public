import { Link } from "react-router-dom";
import {
  HomeIcon,
  FolderIcon,
  Github,
  Mail,
  Linkedin,
  Instagram,
  Antenna,
  NotebookIcon,
} from "lucide-react";
import ModeToggle from "./ModeToggle";
import logo from "@/assets/logo.svg";
import { Dock, DockIcon } from "../magicui/dock";
import { Separator } from "../ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { CoolMode } from "../magicui/cool-mode";

const Header = () => {
  return (
    <Dock className="bg-background/50 border-border">
      <DockIcon className="relative">
        <img
          src={logo}
          alt="Sogan"
          className="w-5 h-5"
        />
      </DockIcon>

      <Separator
        orientation="vertical"
        className="h-full"
      />

      <Link to="/">
        <DockIcon>
          <HomeIcon size={18} />
        </DockIcon>
      </Link>

      <Link to="/projects">
        <DockIcon>
          <FolderIcon size={18} />
        </DockIcon>
      </Link>

      <Link to="/blog">
        <DockIcon>
          <NotebookIcon size={18} />
        </DockIcon>
      </Link>

      <Separator
        orientation="vertical"
        className="h-full"
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Antenna />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-0 w-auto p-1">
          <DropdownMenuGroup className="flex flex-col items-center">
            <DropdownMenuItem className="p-1 w-auto focus:bg-transparent">
              <a
                target="_blank"
                href="https://www.instagram.com/soganyy/"
                rel="noopener noreferrer"
              >
                <DockIcon>
                  <Instagram size={18} />
                  <span className="sr-only">Instagram</span>
                </DockIcon>
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className="p-1 w-auto focus:bg-transparent">
              <a
                target="_blank"
                href="https://github.com/Soganyy"
                rel="noopener noreferrer"
              >
                <DockIcon>
                  <Github size={18} />
                  <span className="sr-only">GitHub</span>
                </DockIcon>
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className="p-1 w-auto focus:bg-transparent">
              <a href="mailto:matinmammadli0420@gmail.com">
                <DockIcon>
                  <Mail size={18} />
                  <span className="sr-only">Email</span>
                </DockIcon>
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className="p-1 w-auto focus:bg-transparent">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/matin-mammadli-b05167225/"
                rel="noopener noreferrer"
              >
                <DockIcon>
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </DockIcon>
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Separator
        orientation="vertical"
        className="h-full"
      />

      <DockIcon>
        <CoolMode>
          <ModeToggle />
        </CoolMode>
      </DockIcon>
    </Dock>
  );
};

export default Header;
