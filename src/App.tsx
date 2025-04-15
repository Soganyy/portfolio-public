import AppRoutes from "./routes";
import { ThemeProvider } from "./stores/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
