import useEventListeners from "../hooks/useEventListener";
import { queueMove } from "../stores/player";
import "../assets/controls.css";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

export function Controls() {
  useEventListeners();

  return (
    <div id="controls">
      <div>
        <Button onClick={() => queueMove("forward")}>
          <ArrowUp className="text-black" />
        </Button>
        <Button onClick={() => queueMove("left")}>
          <ArrowLeft className="text-black" />
        </Button>
        <Button onClick={() => queueMove("backward")}>
          <ArrowDown className="text-black" />
        </Button>
        <Button onClick={() => queueMove("right")}>
          <ArrowRight className="text-black" />
        </Button>
      </div>
    </div>
  );
}
