import useStore from "../stores/game";
import "../assets/result.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function Result() {
  const status = useStore((state) => state.status);
  const score = useStore((state) => state.score);
  const reset = useStore((state) => state.reset);

  if (status === "running") return null;

  return (
    <div id="result-container">
      <Card id="result">
        <CardContent className="text-black">
          <CardTitle className="text-black">
            <h1>Game Over</h1>
          </CardTitle>
          <p>Your score: {score}</p>
        </CardContent>
        <Button onClick={reset}>Retry</Button>
      </Card>
    </div>
  );
}
