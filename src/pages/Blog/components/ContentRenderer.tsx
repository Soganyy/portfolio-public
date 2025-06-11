import { useState, useEffect, JSX } from "react";
import { IBlogPost } from "@/types/blog-post";
import { highlightCode } from "../lib/highlighter";
import Loader from "@/components/common/Loader";

const ContentRenderer = ({ post }: { post: IBlogPost }) => {
  const [renderedContent, setRenderedContent] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const processContent = async () => {
      setIsLoading(true);

      const processedBlocks = await Promise.all(
        post.content.map(async (block, i) => {
          if (block.type === "heading") {
            return (
              <h2
                key={i}
                className="text-2xl font-semibold my-6"
              >
                {block.content}
              </h2>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p
                key={i}
                className="my-4"
              >
                {block.content}
              </p>
            );
          }

          if (block.type === "code") {
            const html = await highlightCode(block.code, block.language || "javascript");
            return (
              <div
                key={i}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          }

          return null;
        })
      );

      setRenderedContent(processedBlocks.filter(Boolean) as JSX.Element[]);
      setIsLoading(false);
    };

    processContent();
  }, [post.content]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 border border-gray-200 dark:border-gray-700 rounded-lg">
        <Loader />
      </div>
    );
  }

  return <section className="prose dark:prose-invert max-w-none mt-8">{renderedContent}</section>;
};

export default ContentRenderer;
