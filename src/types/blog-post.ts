export type TContentBlock =
  | { type: "paragraph"; content: string }
  | {
      type: "heading-1" | "heading-2" | "heading-3" | "heading-4" | "heading-5" | "heading-6";
      content: string;
    }
  | { type: "code"; language: string; code: string }
  | { type: "link"; href: string; content: string; isDownload?: boolean }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "separator-line" | "separator-space" };

export interface IBlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: TContentBlock[];
}
