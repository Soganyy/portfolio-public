import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LibraryBig, Lightbulb, Music3, Share2, Sprout, TentTree } from "lucide-react";

const Me = () => {
  const projects = [
    {
      id: 1,
      icon: <LibraryBig />,
      title: "Curiosity",
      description:
        "First thing I consider is learning. I'm always in a state of growth, driven by a constant desire to learn, challenge myself, and discover new possibilities that expand my understanding of the world.",
    },
    {
      id: 2,
      icon: <Sprout />,
      title: "Nature",
      description:
        "I value authenticity in all things, embracing the natural, unaltered aspects of life while rejecting anything fake or superficial.",
    },
    {
      id: 3,
      icon: <Music3 />,
      title: "Minimalism",
      description:
        "For me, it’s about savoring the small moments, finding joy in the everyday, and still dreaming big as I go along.",
    },
    {
      id: 4,
      icon: <Share2 />,
      title: "Connection",
      description:
        "I’m deeply interested in human connections, always seeking to understand others and build meaningful relationships that enrich life, guided by empathy and genuine interaction.",
    },
    {
      id: 5,
      icon: <Lightbulb />,
      title: "Innovation",
      description:
        "I thrive on creating and building, whether through technology or new ventures, constantly striving to turn ideas into reality and make an impact in the world through innovation.",
    },
    {
      id: 6,
      icon: <TentTree />,
      title: "Adventure",
      description:
        "I embrace the freedom to explore life, whether through an entrepreneurial journey or the simple pursuit of new experiences, all while maintaining a deep sense of curiosity and wanderlust.",
    },
  ];
  return (
    <section
      id="projects"
      className="sm:h-screen py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-5xl font-bold mb-4 text-center">Me</h2>
      <p className="text-center text-muted-foreground mb-12">A collection of who I am</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col h-full group hover:border-primary/20 transition-all"
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>{project.icon}</span>
                <p>{project.title}</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Me;
