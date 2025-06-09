import Header from "@/components/common/Header";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div>{children}</div>

      <header className="fixed bottom-5 left-0 right-0 z-50">
        <Header />
      </header>
    </div>
  );
}
