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
    <div className="fixed right-7 top-40 z-40 w-[20rem] rounded-xl bg-white p-8 text-start sm:right-[30%] sm:top-[20%] sm:min-h-[13rem] sm:w-[30rem] dark:bg-dark-grey">
      <label className="text-sm font-bold text-medium-grey">Column Name</label>
      <input
        className="focus:shadow-outline mt-1 w-full appearance-none rounded border px-3 py-2 font-semibold text-medium-grey  shadow focus:outline-none dark:border dark:border-lines-dark dark:bg-dark-grey"
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
