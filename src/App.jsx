import Header from "./ui/Header";
import Main from "./ui/Main";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="overflow-hidden">
        <Header />
        <Main />
      </div>
    </AppProvider>
  );
}

export default App;
