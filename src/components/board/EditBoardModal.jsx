import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import InputColumnModal from "./InputColumnModal";

function EditBoardModal() {
  const { activeBoard } = useAppContext();
  const [newBoardName, setNewBoardName] = useState(activeBoard.name);

  return (
    <div className="fixed right-[30%] top-[4%] z-50 min-h-[23rem] w-[30rem] rounded-xl bg-white p-8 text-start">
      <p className="mb-5 text-xl font-bold">Edit Board</p>
      <div className="mb-5">
        <label className="text-sm font-bold text-medium-grey">Board Name</label>
        <input
          className="focus:shadow-outline mt-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none"
          type="text"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
        />
      </div>
      <label className="text-sm font-bold text-medium-grey">Columns</label>
      {activeBoard.columns.map((col) => (
        <InputColumnModal col={col} key={col.id} />
      ))}
      <button
        className="mt-5 w-full rounded-full bg-main-purple p-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light"
        // onClick={handleClick}
      >
        Save Changes
      </button>
    </div>
  );
}

export default EditBoardModal;
