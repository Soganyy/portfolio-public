import { Clipboard } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const CodeBlock: React.FC<{ code: string; language?: string; className?: string }> = ({
  code,
  language = "javascript",
  className,
}) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Code copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className={`relative ${className || ""}`}>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <div className="flex justify-between items-center mb-4 text-xs text-gray-400">
          <span>{language}</span>
          <button
            onClick={handleCopy}
            className="hover:bg-gray-600 text-gray-200 px-2 py-1 rounded text-sm transition"
            aria-label="Copy code to clipboard"
          >
            <Clipboard size={16} />
          </button>
        </div>
        <pre className="text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
