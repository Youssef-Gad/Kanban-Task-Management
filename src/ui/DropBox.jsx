import { useAppContext } from "../context/AppContext";

function DropBox({ type, setShowDropBox, setShowModal }) {
  const { setShowEditBoard, setShowDeleteBoard, setShowEditTask, dispatch } =
    useAppContext();

  function handleEditBoard() {
    setShowEditBoard((e) => !e);
    setShowDropBox(false);
  }

  function handleDeleteBoard() {
    setShowDeleteBoard((e) => !e);
    setShowDropBox(false);
  }

  function handleEditTask() {
    setShowEditTask(true);
    setShowModal(false);
  }

  function handleDeleteTask() {
    dispatch({ type: "deleteTask" });
  }

  if (type === "task")
    return (
      <div className="h-30 absolute right-0 top-8 w-44 rounded-md bg-white p-5 text-sm font-medium shadow-md dark:bg-dark-grey">
        <button
          onClick={handleEditTask}
          className="text-medium-grey transition-colors duration-300 hover:text-gray-500"
        >
          Edit Task
        </button>
        <button
          className="mt-3 text-red  transition-colors duration-300 hover:text-red-light"
          onClick={handleDeleteTask}
        >
          Delete Task
        </button>
      </div>
    );
  else if (type === "header")
    return (
      <>
        <div className="h-15 absolute right-5 top-16 w-44 rounded-md bg-white p-5 text-sm font-medium shadow-lg dark:bg-dark-grey">
          <button
            onClick={handleEditBoard}
            className="text-medium-grey transition-colors duration-300 hover:text-gray-500"
          >
            Edit Board
          </button>
          <button
            className="mt-3 text-red transition-colors duration-300 hover:text-red-light"
            onClick={handleDeleteBoard}
          >
            Delete Board
          </button>
        </div>
      </>
    );
}

export default DropBox;
