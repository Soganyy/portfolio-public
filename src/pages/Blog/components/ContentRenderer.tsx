import { BlogPost } from "@/types/blog-post";
import CodeBlock from "./CodeBlock";

const ContentRenderer = ({ post }: { post: BlogPost }) => {
  return (
    <section className="prose dark:prose-invert max-w-none mt-8">
      {post.content.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="text-2xl font-semibold my-6"
              >
                {block.content}
              </h2>
            );
          case "paragraph":
            return (
              <p
                key={i}
                className="my-4"
              >
                {block.content}
              </p>
            );
          case "code":
            return (
              <CodeBlock
                key={i}
                code={block.code}
                language={block.language}
                className="my-4"
              />
            );
          default:
            return null;
        }
      })}
    </section>
  );
};

export default ContentRenderer;
