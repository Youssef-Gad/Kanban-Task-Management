import { useAppContext } from "../../context/AppContext";
import Column from "./Column";

function Columns({ hide }) {
  const { activeBoard } = useAppContext();

  return (
    <div
      className={`${hide ? "ml-[5rem]" : "ml-[20rem]"} scrollbar-hide mt-24 flex h-full w-full flex-col items-center gap-24 overflow-scroll py-4 sm:flex-row sm:items-start`}
    >
      {activeBoard?.columns?.map((column) => (
        <Column column={column} key={column.id} />
      ))}
    </div>
  );
}

export default Columns;
