import { useState, useEffect, JSX } from "react";
import { IBlogPost } from "@/types/blog-post";
import { highlightCode } from "../lib/highlighter";
import Loader from "@/components/common/Loader";
import React from "react";

const ContentRenderer = ({ post }: { post: IBlogPost }) => {
  const [renderedContent, setRenderedContent] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
                className: `font-semibold mt-${Math.max(4, 10 - level)} text-${3 + (6 - level)}xl`,
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
                  className="text-blue-600 underline"
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
