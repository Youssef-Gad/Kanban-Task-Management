import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

function InputColumnModal({ col }) {
  const [colName, setColName] = useState(col.name);
  const { dispatch, setShowEditBoard } = useAppContext();

  function handleDeleteColumn() {
    dispatch({ type: "deleteColumn", payload: col.id });
    setShowEditBoard(false);
  }

  function handleEditColumnName() {
    if (!colName || colName === col.name) return;
    dispatch({
      type: "EditColumnName",
      payload: { id: col.id, newName: colName },
    });
    setShowEditBoard(false);
  }

  return (
    <div className="mb-5 flex items-center gap-1 sm:mb-0 sm:gap-7">
      <input
        className="focus:shadow-outline mb-3 mt-1 w-full appearance-none rounded border px-3 py-2 font-semibold text-medium-grey shadow focus:outline-none dark:border dark:border-lines-dark dark:bg-dark-grey"
        type="text"
        placeholder="Enter New Name"
        value={colName}
        onChange={(e) => setColName(e.target.value)}
      />
      {/* <img
        src="/src/assets/icon-cross.svg"
        alt="icon"
        className="cursor-pointer rounded-full bg-[#f5f5f5] p-4 transition-colors duration-300 hover:bg-[#e1e1e1]"
        onClick={handleDeleteColumn}
      /> */}
      <button
        className="rounded-full bg-main-purple px-3 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light sm:px-8 sm:py-3"
        onClick={handleEditColumnName}
      >
        Save
      </button>
      <button
        className="rounded-full bg-red px-3 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-red-light sm:px-8 sm:py-3"
        onClick={handleDeleteColumn}
      >
        Delete
      </button>
    </div>
  );
}

export default InputColumnModal;
