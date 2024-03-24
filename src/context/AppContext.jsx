import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import shortid from "shortid";

const AppContext = createContext();

const initialState = { boards: [], activeBoard: {} };

function reducer(state, action) {
  switch (action.type) {
    case "getData":
      return {
        ...state,
        boards: action.payload.boards,
        activeBoard: action.payload.boards[0],
      };
    case "updateActiveBoard":
      return { ...state, activeBoard: action.payload };
    case "statusUpdate":
      const cols = state.activeBoard.columns;
      const [col] = cols.filter((col) => col.name === action.payload.oldStatus);
      const tasks = col.tasks;
      col.tasks = tasks.filter(
        (task) => task.title !== action.payload.taskTitle,
      );

      const [colTarget] = cols.filter(
        (col) => col.name === action.payload.newStatus,
      );
      const newTasks = colTarget.tasks;
      const newId = shortid.generate();
      newTasks.tasks = newTasks.push({
        ...action.payload.task,
        id: newId,
        status: action.payload.newStatus,
      });
      return { ...state };
    default:
      throw new Error("Action Unknown");
  }
}

function AppProvider({ children }) {
  const [{ boards, activeBoard }, dispatch] = useReducer(reducer, initialState);
  const [showSideNavMobile, setShowSideNavMobile] = useState(false);

  useEffect(function () {
    async function getData() {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      dispatch({ type: "getData", payload: data });
    }
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        showSideNavMobile,
        boards,
        activeBoard,
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
