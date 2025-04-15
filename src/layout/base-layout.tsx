import Header from "@/components/common/header";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
