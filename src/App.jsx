import Header from "./ui/Header";
import Main from "./ui/Main";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Header />
      <Main />
    </AppProvider>
  );
}

export default App;
