import { useAppContext } from "../../context/AppContext";

function DeleteModal() {
  const { setShowDeleteBoard, activeBoard, dispatch } = useAppContext();

  function handleDeleteBoard() {
    dispatch({ type: "deleteBoard" });
    setShowDeleteBoard(false);
  }

  return (
    <div className="fixed right-[30%] top-[20%] z-50 min-h-[15rem] w-[30rem] rounded-xl bg-white p-8 text-start">
      <p className="mb-5 text-xl font-bold text-red">Delete this Board?</p>
      <p className="mb-5 text-sm font-semibold text-medium-grey">
        Are you sure you want to delete the "{activeBoard.name}" board? This
        action will remove all columns and tasks and cannot be reversed.
      </p>
      <div className="flex justify-around">
        <button
          className="rounded-full bg-red px-16 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-red-light"
          onClick={handleDeleteBoard}
        >
          Delete
        </button>
        <button
          className="rounded-full bg-main-purple px-16 py-3  text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light"
          onClick={() => setShowDeleteBoard(false)}
        >
          Cancle
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
