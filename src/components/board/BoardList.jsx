import { useAppContext } from "../../context/AppContext";
import Board from "./Board";

function BoardList() {
  const { boards, setNewBoardShowModal } = useAppContext();

  return (
    <div className="mb-1 w-64">
      <div>
        <p className="py-5 pl-7 text-xs font-bold tracking-widest text-medium-grey">
          ALL BOARDS ({boards.length})
        </p>
      </div>

      {boards.map((board) => (
        <Board key={board.id} board={board} />
      ))}

      <button
        className={`flex w-full items-center rounded-r-full py-3 pl-7 text-main-purple transition-all duration-300 hover:opacity-70`}
        onClick={() => setNewBoardShowModal((e) => !e)}
      >
        <svg
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-4"
        >
          <path
            d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
            fill="#635FC7"
          />
        </svg>
        <p className="font-bold">+ Create New Board</p>
      </button>
    </div>
  );
}

export default BoardList;
