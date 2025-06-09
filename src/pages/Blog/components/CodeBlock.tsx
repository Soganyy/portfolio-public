const CodeBlock: React.FC<{ code: string; language?: string }> = ({
  code,
  language = "javascript",
}) => {
  return (
    <div className="relative">
      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <div className="text-xs text-gray-400 mb-2">{language}</div>
        <pre className="text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
