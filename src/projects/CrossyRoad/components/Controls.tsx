import useEventListeners from "../hooks/useEventListener";
import { queueMove } from "../stores/player";
import "../assets/controls.css";

export function Controls() {
  useEventListeners();

  return (
    <div id="controls">
      <div>
        <button onClick={() => queueMove("forward")}>▲</button>
        <button onClick={() => queueMove("left")}>◀</button>
        <button onClick={() => queueMove("backward")}>▼</button>
        <button onClick={() => queueMove("right")}>▶</button>
      </div>
    </div>
  );
}
