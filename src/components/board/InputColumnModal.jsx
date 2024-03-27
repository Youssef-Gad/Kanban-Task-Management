import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

function InputColumnModal({ col }) {
  const [colName, setColName] = useState(col.name);
  const { dispatch, setShowEditBoard } = useAppContext();

  function handleClick() {
    dispatch({ type: "deleteColumn", payload: col.id });
    setShowEditBoard(false);
  }

  return (
    <div className="flex items-center gap-7">
      <input
        className="focus:shadow-outline mb-3 mt-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none"
        type="text"
        placeholder="Enter New Column Name"
        value={colName}
        onChange={(e) => setColName(e.target.value)}
      />
      <img
        src="/src/assets/icon-cross.svg"
        alt="icon"
        className="cursor-pointer rounded-full bg-[#f5f5f5] p-4 transition-colors duration-300 hover:bg-[#e1e1e1]"
        onClick={handleClick}
      />
    </div>
  );
}

export default InputColumnModal;
