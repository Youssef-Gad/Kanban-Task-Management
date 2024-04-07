import { useAppContext } from "../../context/AppContext";

function DeleteModal() {
  const { setShowDeleteBoard, activeBoard, dispatch } = useAppContext();

  function handleDeleteBoard() {
    dispatch({ type: "deleteBoard" });
    setShowDeleteBoard(false);
  }

  return (
    <div className="fixed right-7 top-40 z-40 w-[20rem] rounded-xl bg-white p-8 text-start sm:right-[30%] sm:top-[25%] sm:min-h-[15rem] sm:w-[30rem] dark:bg-dark-grey">
      <p className="mb-5 text-xl font-bold text-red">Delete this Board?</p>
      <p className="mb-5 text-sm font-semibold text-medium-grey">
        Are you sure you want to delete the "{activeBoard.name}" board? This
        action will remove all columns and tasks and cannot be reversed.
      </p>
      <div className="flex justify-around">
        <button
          className="rounded-full bg-red px-7 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-red-light sm:px-16 sm:py-3"
          onClick={handleDeleteBoard}
        >
          Delete
        </button>
        <button
          className="rounded-full bg-main-purple px-7 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light sm:px-16 sm:py-3 "
          onClick={() => setShowDeleteBoard(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
