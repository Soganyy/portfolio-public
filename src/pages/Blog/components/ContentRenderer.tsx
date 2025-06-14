import { useState, useEffect, JSX } from "react";
import { IBlogPost } from "@/types/blog-post";
import { highlightCode } from "../lib/highlighter";
import Loader from "@/components/common/Loader";
import React from "react";
import { Separator } from "@/components/ui/separator";

const ContentRenderer = ({ post }: { post: IBlogPost }) => {
  const [renderedContent, setRenderedContent] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fontSizeMap: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };

  const marginTopMap: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
    1: "mt-16",
    2: "mt-14",
    3: "mt-10",
    4: "mt-8",
    5: "mt-6",
    6: "mt-4",
  };

  useEffect(() => {
    const processContent = async () => {
      setIsLoading(true);

      const processedBlocks = await Promise.all(
        post.content.map(async (block, i) => {
          if (block.type.startsWith("heading-")) {
            const level = parseInt(block.type.split("-")[1], 10);
            const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

            return React.createElement(
              HeadingTag,
              {
                key: i,
                className: `font-semibold ${
                  marginTopMap[level as keyof typeof marginTopMap] || "mt-4"
                } ${fontSizeMap[level as keyof typeof fontSizeMap]}`,
              },
              "content" in block ? block.content : ""
            );
          }

          if (block.type === "paragraph") {
            return (
              <p
                key={i}
                className="leading-relaxed my-4"
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
                className="my-4"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          }

          if (block.type === "link") {
            return (
              <p key={i}>
                <a
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={block.isDownload}
                  className="text-primary underline"
                >
                  {block.content}
                </a>
              </p>
            );
          }

          if (block.type === "list") {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={i}
                className="list-inside list-disc my-4"
              >
                {block.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ListTag>
            );
          }

          if (block.type === "image") {
            return (
              <figure
                key={i}
                className="my-6"
              >
                <img
                  src={block.src}
                  alt={block.alt || ""}
                  className="rounded-lg"
                />
                {block.caption && (
                  <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          if (block.type === "separator-line") {
            return <Separator />;
          }

          if (block.type === "separator-space") {
            return <div className="mt-16" />;
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
