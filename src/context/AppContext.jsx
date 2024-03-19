import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AppContext = createContext();

const initialState = { boards: [], activeBoardId: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "getData":
      return { ...state, boards: action.payload };
    case "activeBoard":
      return { ...state, activeBoardId: action.payload };
    default:
      throw new Error("Action Unknown");
  }
}

function AppProvider({ children }) {
  const [{ boards, activeBoardId }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const [showSideNavMobile, setShowSideNavMobile] = useState(false);

  useEffect(function () {
    async function getData() {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      dispatch({ type: "getData", payload: data.boards });
    }
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        showSideNavMobile,
        boards,
        activeBoardId,
        setShowSideNavMobile,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was outside of the AppProvider");
  return context;
}

export { AppProvider, useAppContext };
