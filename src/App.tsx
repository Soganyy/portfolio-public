import AppRoutes from "./routes";
import { ThemeProvider } from "./stores/theme-provider";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
