import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import shortid from "shortid";

const AppContext = createContext();

const initialState = {
  boards: [],
  activeBoard: {},
  activeTask: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "getData":
      return {
        ...state,
        boards: action.payload.boards,
        activeBoard: action.payload.boards[0],
      };
    case "activeTask":
      return { ...state, activeTask: action.payload };
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
    case "addNewBoard":
      return {
        ...state,
        boards: [...state.boards, action.payload],
        activeBoard: action.payload,
      };
    case "deleteColumn":
      const newCols = state.activeBoard.columns.filter(
        (col) => col.id !== action.payload,
      );
      return {
        ...state,
        activeBoard: { ...state.activeBoard, columns: newCols },
      };
    case "addNewColumn":
      const newColumn = [...state.activeBoard.columns, action.payload];
      return {
        ...state,
        activeBoard: { ...state.activeBoard, columns: newColumn },
      };
    case "EditBoardName":
      const newBoards = state.boards.map((board) =>
        board.id === state.activeBoard.id
          ? { ...board, name: action.payload }
          : board,
      );
      return {
        ...state,
        boards: newBoards,
        activeBoard: { ...state.activeBoard, name: action.payload },
      };
    case "deleteBoard":
      const boards = state.boards.filter(
        (board) => board.id !== state.activeBoard.id,
      );
      return { ...state, boards: boards, activeBoard: {} };
    case "EditColumnName":
      const columns = state.activeBoard.columns.map((col) =>
        col.id === action.payload.id
          ? { ...col, name: action.payload.newName }
          : col,
      );
      return {
        ...state,
        activeBoard: { ...state.activeBoard, columns: columns },
      };
    case "addNewTask":
      const newColumns = state.activeBoard.columns.map((col) =>
        col.name === action.payload.status
          ? { ...col, tasks: [...col.tasks, action.payload.newTask] }
          : col,
      );
      return {
        ...state,
        activeBoard: { ...state.activeBoard, columns: newColumns },
      };
    // case "EditTask":
    //   const newColumns2=state.activeBoard.columns.map((col) =>col.tasks)
    //   return { ...state, activeTask: action.payload };
    default:
      throw new Error("Action Unknown");
  }
}

function AppProvider({ children }) {
  const [{ boards, activeBoard, activeTask }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const [showSideNavMobile, setShowSideNavMobile] = useState(false);
  const [showNewBoardModal, setNewBoardShowModal] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);
  const [showDeleteBoard, setShowDeleteBoard] = useState(false);
  const [showNewColumn, setShowNewColumn] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);

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
        showNewBoardModal,
        showEditBoard,
        showDeleteBoard,
        showNewColumn,
        showNewTask,
        showEditTask,
        activeTask,
        setShowEditTask,
        setShowNewTask,
        setShowNewColumn,
        setShowDeleteBoard,
        setShowEditBoard,
        setNewBoardShowModal,
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
