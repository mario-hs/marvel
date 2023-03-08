import { ApplicationDataContextProvider } from "./contexts/ApplicationDataContext";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext";
import { Router } from "./routes/Routes";

function App() {
  return (
    <ApplicationDataContextProvider>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </ApplicationDataContextProvider>
  );
}

export default App;
