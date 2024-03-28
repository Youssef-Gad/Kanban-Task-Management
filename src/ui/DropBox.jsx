import { useAppContext } from "../context/AppContext";

function DropBox({ type, setShowDropBox, setShowModal }) {
  const { setShowEditBoard, setShowDeleteBoard, setShowEditTask } =
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

  if (type === "task")
    return (
      <div className="h-30 absolute right-0 top-8 w-44 rounded-md bg-white p-5 text-sm font-medium shadow-md">
        <button onClick={handleEditTask}>Edit Task</button>
        <button className="mt-3 text-red">Delete Task</button>
      </div>
    );
  else if (type === "header")
    return (
      <>
        <div className="h-15 absolute right-5 top-16 w-44 rounded-md bg-white p-5 text-sm font-medium shadow-lg">
          <button onClick={handleEditBoard}>Edit Board</button>
          <button className="mt-3 text-red" onClick={handleDeleteBoard}>
            Delete Board
          </button>
        </div>
      </>
    );
}

export default DropBox;
