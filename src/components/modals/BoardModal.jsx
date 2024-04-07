import { useState } from "react";
import shortid from "shortid";
import { useAppContext } from "../../context/AppContext";

function BoardModal({ setShowModal }) {
  const [boardName, setBoardName] = useState("");
  const [colName, setColName] = useState("");
  const { dispatch } = useAppContext();

  function handleClick() {
    if (!boardName || !colName) return;
    const newBoard = {
      id: shortid.generate(),
      name: boardName,
      columns: [{ id: shortid.generate(), name: colName, tasks: [] }],
    };

    dispatch({ type: "addNewBoard", payload: newBoard });
    setShowModal(false);
  }

  return (
    <div className="fixed right-7 top-40 z-40 w-[20rem] rounded-xl bg-white p-8 text-start sm:right-[30%] sm:top-[4%] sm:min-h-[23rem] sm:w-[30rem] dark:bg-dark-grey">
      <p className="mb-5 text-xl font-bold">Add New Board</p>
      <div className="mb-5">
        <label className="text-sm font-bold text-medium-grey">Name</label>
        <input
          className="focus:shadow-outline mt-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none dark:border dark:border-lines-dark dark:bg-dark-grey"
          type="text"
          placeholder="Enter New Board Name"
          onChange={(e) => setBoardName(e.target.value)}
        />
      </div>
      <div>
        <label className="text-sm font-bold text-medium-grey">Columns</label>
        <input
          className="focus:shadow-outline mb-3 mt-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none dark:border dark:border-lines-dark dark:bg-dark-grey"
          type="text"
          placeholder="Enter New Column Name"
          onChange={(e) => setColName(e.target.value)}
        />
      </div>
      {/* <button className="mt-5 w-full rounded-full bg-main-purple p-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light">
        +Add New Column
      </button> */}
      <button
        className="mt-5 w-full rounded-full bg-main-purple p-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light"
        onClick={handleClick}
      >
        Create New Board
      </button>
    </div>
  );
}

export default BoardModal;
