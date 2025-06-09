import CodeBlock from "./CodeBlock";

const ContentRenderer: React.FC<{ content: string }> = ({ content }) => {
  // Split content by code blocks (assuming ```language format)
  const parts = content.split(/```(\w+)?\n([\s\S]*?)```/g);

  return (
    <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
      {parts.map((part, index) => {
        // Every third element starting from index 2 is code content
        if ((index - 2) % 3 === 0 && index > 0) {
          const language = parts[index - 1] || "javascript";
          return (
            <CodeBlock
              key={index}
              code={part.trim()}
              language={language}
            />
          );
        }
        // Skip language identifiers
        if ((index - 1) % 3 === 0 && index > 0) {
          return null;
        }
        // Regular content
        if (part.trim()) {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{
                __html: part.replace(/\n/g, "<br />"),
              }}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ContentRenderer;
