import { useAppContext } from "../../context/AppContext";
import Column from "./Column";

function Columns({ hide }) {
  const { boards, activeBoardId } = useAppContext();
  const activeBoard = { columns: [] };

  boards.map((board) =>
    board.id === activeBoardId ? (activeBoard.columns = board.columns) : null,
  );

  return (
    <div
      className={`flex min-w-[calc(100%-18rem)] justify-around bg-light-grey py-4  ${hide ? "translate-x-[-25%]" : ""} transition-transform duration-300`}
    >
      {activeBoard.columns.map((column) => (
        <Column column={column} key={column.id} />
      ))}
    </div>
  );
}

export default Columns;
