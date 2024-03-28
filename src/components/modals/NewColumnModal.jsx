import shortid from "shortid";
import { useAppContext } from "../../context/AppContext";
import { useState } from "react";

function NewColumnModal() {
  const { dispatch, setShowNewColumn } = useAppContext();
  const [newColName, setNewColName] = useState("");

  function handleAddNewColumn() {
    const newColumn = {
      id: shortid.generate(),
      name: newColName,
      tasks: [],
    };
    dispatch({ type: "addNewColumn", payload: newColumn });
    setShowNewColumn(false);
  }
  return (
    <div className="fixed right-[30%] top-[20%] z-50 min-h-[13rem] w-[30rem] rounded-xl bg-white p-8 text-start">
      <label className="text-sm font-bold text-medium-grey">Column Name</label>
      <input
        className="focus:shadow-outline mt-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none"
        type="text"
        value={newColName}
        placeholder="Enter Column Name"
        onChange={(e) => setNewColName(e.target.value)}
      />
      <button
        className="mt-5 w-full rounded-full bg-main-purple p-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light"
        onClick={handleAddNewColumn}
      >
        Save Column Name
      </button>
    </div>
  );
}

export default NewColumnModal;
