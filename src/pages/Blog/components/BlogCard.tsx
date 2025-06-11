import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { IBlogPost } from "@/types/blog-post";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  post: IBlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <Card
      className="flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleCardClick}
    >
      <CardHeader className="flex-1">
        <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3 text-sm">{post.excerpt}</CardDescription>
      </CardHeader>

      <CardFooter>
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
