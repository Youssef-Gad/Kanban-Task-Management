import { useState } from "react";
import SubTask from "./SubTask";
import { useAppContext } from "../../context/AppContext";

function Task({ selectedTask }) {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [currentStauts, setCurrentStatus] = useState(selectedTask.status);
  const { activeBoard, dispatch } = useAppContext();

  function handleSelection(e) {
    setCurrentStatus(e.target.value);
    activeBoard.columns.map((col) =>
      col.tasks.filter((task) => task.status === currentStauts),
    );
    // dispatch({ type: "statusUpdate",payload: });
  }

  return (
    <div className="fixed right-[30%] top-[4%] z-40 min-h-[23rem] w-[30rem] rounded-xl bg-white p-8 text-start">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xl font-bold">{selectedTask.title}</p>
        <img src="/src/assets/icon-vertical-ellipsis.svg" alt="icon" />
      </div>
      <p className="mb-5 text-sm font-bold text-medium-grey">
        {selectedTask.description === ""
          ? "No Description"
          : selectedTask.description}
      </p>
      <div>
        <p className="mb-5 text-sm font-bold text-medium-grey">
          Subtasks ({completedTasks.length} of {selectedTask.subtasks.length})
        </p>
        <div className="mb-2 flex flex-col gap-3">
          {selectedTask.subtasks.map((subtask) => (
            <SubTask
              subtask={subtask}
              setCompletedTasks={setCompletedTasks}
              selectedTask={selectedTask}
              key={subtask.title}
            />
          ))}
        </div>
        <p className="mb-5 text-sm font-bold text-medium-grey">
          Current status
        </p>
        <select
          className="w-full rounded-md border-2 border-[#828fa366] p-2 text-sm font-semibold focus:border-main-purple"
          value={currentStauts}
          onChange={(e) => handleSelection(e)}
        >
          {activeBoard.columns.map((col) => (
            <option key={col.name} value={col.name} className="font-semibold">
              {col.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Task;
