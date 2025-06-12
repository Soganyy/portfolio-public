import { createHighlighter } from "shiki";

let highlighter: any = null;

const getHighlighter = async () => {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: [],
      langs: ["javascript", "typescript", "css", "html", "json", "python", "bash"],
    });
  }
  return highlighter;
};

export const highlightCode = async (
  code: string,
  language: string = "javascript"
): Promise<string> => {
  const hl = await getHighlighter();

  // Load language if not already loaded
  try {
    await hl.loadLanguage(language);
    await hl.loadTheme("github-dark");
  } catch (error) {
    // Fallback to javascript if language not found
    language = "javascript";
  }

  const html = hl.codeToHtml(code, {
    lang: language,
    theme: "github-dark",
    transformers: [
      {
        pre(node: any) {
          // Add custom classes to pre element
          node.properties.class = "shiki-container";
          node.properties.style = `
            background: #1a1a1a;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: var(--radius-md);
            overflow-x: auto;
            border: 1px solid #333;
          `
            .replace(/\s+/g, " ")
            .trim();
        },
        code(node: any) {
          // Add line numbers
          node.properties.style = `
            display: grid;
            counter-reset: line;
          `
            .replace(/\s+/g, " ")
            .trim();
        },
        line(node: any, line: any) {
          // Add line number styling
          node.properties.style = `
            display: flex;
            min-height: 1.5rem;
          `
            .replace(/\s+/g, " ")
            .trim();

          node.properties["data-line"] = line;

          // Add line number pseudo-element via CSS
          node.children.unshift({
            type: "element",
            tagName: "span",
            properties: {
              class: "line-number",
              style: `
                margin-right: 1rem;
                text-align: right;
                color: #666;
                user-select: none;
                font-size: 0.875rem;
                line-height: 1.5rem;
              `
                .replace(/\s+/g, " ")
                .trim(),
            },
            children: [{ type: "text", value: line.toString() }],
          });
        },
      },
    ],
  });

  return html;
};
