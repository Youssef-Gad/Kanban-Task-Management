import { useAppContext } from "../../context/AppContext";
import Column from "./Column";

function Columns({ hide }) {
  const { activeBoard, setShowNewColumn } = useAppContext();

  return (
    <div
      className={`${hide ? "sm:pl-[4rem]" : "pl-[3rem] sm:pl-[20rem]"} scrollbar-hide mt-24 flex h-[100vh] w-full items-start gap-24 overflow-scroll py-4 sm:h-full sm:w-[120%] dark:bg-dark-grey`}
    >
      {activeBoard?.columns?.map((column) => (
        <Column column={column} key={column.id} />
      ))}
      {!Object.keys(activeBoard).length ? (
        <p className="h-[85.7vh] text-xl font-bold text-main-purple sm:ml-[20rem] sm:mt-[10rem] sm:h-[47.6rem]">
          😉Select a Board or Create New One
        </p>
      ) : (
        activeBoard.columns.length < 4 && (
          <div
            className="flex min-h-[30rem] min-w-[15rem] cursor-pointer items-center justify-center bg-[#E9EFFA] p-3 text-main-purple transition-colors duration-300 hover:text-main-purple-light dark:bg-very-dark-grey"
            onClick={() => setShowNewColumn(true)}
          >
            <p className="text-xl font-bold">+ New Column</p>
          </div>
        )
      )}
    </div>
  );
}

export default Columns;
