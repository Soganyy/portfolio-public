import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CrossyRoadGame from "@/projects/CrossyRoad";

const CrossyRoad = () => {
  return (
    <section className="container mx-auto py-20">
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle>Crossy Road</CardTitle>
          <CardDescription>
            This project is a 3D Crossy Road–inspired game, crafted using React Three Fiber and
            TypeScript. The foundation is based on a tutorial from{" "}
            <a
              href="https://javascriptgametutorials.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Javascript Game Tutorials
            </a>
            . The current implementation closely follows the source material and is not entirely my
            own work. I plan to modify and extend parts of the codebase in the future. Please note
            that the project is still under development and may contain some bugs.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full h-100">
          <CrossyRoadGame />
        </CardContent>
      </Card>
    </section>
  );
};

export default CrossyRoad;
