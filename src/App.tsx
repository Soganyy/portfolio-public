import { useEffect } from "react";
import AppRoutes from "./routes";
import { ThemeProvider } from "./stores/theme-provider";
import { toast, Toaster } from "sonner";

function App() {
  useEffect(() => {
    console.log(1);

    toast("Hey! Thanks for dropping by. Just a quick note — this isn’t a portfolio site.");
  }, []);

  return (
    <ThemeProvider>
      <AppRoutes />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
