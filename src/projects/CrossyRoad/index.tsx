import { Map } from "./components/Map";
import { Controls } from "./components/Controls";
import { Player } from "./components/Player";
import { Scene } from "./components/Scene";
import { Score } from "./components/Score";
import { Result } from "./components/Result";
import "./assets/game.css";

export default function Game() {
  return (
    <div className="game">
      <Scene>
        <Player />
        <Map />
      </Scene>
      <Score />
      <Controls />
      <Result />
    </div>
  );
}
