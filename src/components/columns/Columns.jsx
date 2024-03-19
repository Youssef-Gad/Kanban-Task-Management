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
      className={`${hide ? "left-0" : "left-[14rem]"} absolute flex h-full min-w-full flex-col items-center justify-around py-4 sm:flex-row sm:items-start`}
    >
      {activeBoard.columns.map((column) => (
        <Column column={column} key={column.id} />
      ))}
    </div>
  );
}

export default Columns;
