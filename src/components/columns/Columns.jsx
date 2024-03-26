import { useAppContext } from "../../context/AppContext";
import Column from "./Column";

function Columns({ hide }) {
  const { activeBoard } = useAppContext();

  return (
    <div
      className={`${hide ? "ml-[3rem]" : "ml-[20rem]"} scrollbar-hide mt-24 flex h-full w-full flex-col items-center gap-24 overflow-scroll py-4 sm:flex-row sm:items-start`}
    >
      {activeBoard?.columns?.map((column) => (
        <Column column={column} key={column.id} />
      ))}
      <div className="flex min-h-[30rem] min-w-[15rem] cursor-pointer items-center justify-center bg-[#E9EFFA]  p-3 text-main-purple transition-colors duration-300 hover:text-main-purple-light ">
        <p className="text-xl font-bold">+ New Column</p>
      </div>
    </div>
  );
}

export default Columns;
