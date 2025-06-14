import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { blogPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section
      id="blogs"
      className="sm:h-screen py-20 flex flex-col items-center justify-center"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">
          Blogs{" "}
          <ExternalLink
            className="inline cursor-pointer text-muted-foreground"
            onClick={() => navigate("/blog")}
          />
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Knowledge, perspective, ideas and much more
        </p>
      </div>

      <div className="w-full max-w-6xl">
        <Carousel
          opts={{
            align: "end",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {blogPosts.map((blog) => (
              <CarouselItem
                key={blog.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <Card className="flex flex-col h-full group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 text-primary">
                        <span className="text-xs font-medium bg-primary/10 px-2 py-1 rounded-full">
                          {blog.category}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-muted-foreground mb-4 line-clamp-3">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Blog;
