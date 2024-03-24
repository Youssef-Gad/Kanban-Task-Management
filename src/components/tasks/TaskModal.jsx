import { useState } from "react";
import SubTask from "./SubTask";
import { useAppContext } from "../../context/AppContext";
import DropBox from "../../ui/DropBox";

function TaskModal({ task, subTasksArr, setSubTasksArr }) {
  const [currentStauts, setCurrentStatus] = useState(task.status);
  const [showDropBox, setShowDropBox] = useState(false);
  const { activeBoard, dispatch } = useAppContext();

  function handleSelection(e) {
    setCurrentStatus(e.target.value);
    dispatch({
      type: "statusUpdate",
      payload: {
        newStatus: e.target.value,
        oldStatus: currentStauts,
        taskTitle: task.title,
        task,
      },
    });
  }

  return (
    <div className="fixed right-[30%] top-[4%] z-40 min-h-[23rem] w-[30rem] rounded-xl bg-white p-8 text-start">
      <div className="relative mb-3 flex items-center justify-between">
        <p className="text-xl font-bold">{task.title}</p>
        <img
          className="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-light-grey"
          src="/src/assets/icon-vertical-ellipsis.svg"
          alt="icon"
          onClick={() => setShowDropBox((e) => !e)}
        />
        {showDropBox && <DropBox type="task" />}
      </div>
      <p className="mb-5 text-sm font-bold text-medium-grey">
        {task.description === "" ? "No Description" : task.description}
      </p>
      <div>
        <p className="mb-5 text-sm font-bold text-medium-grey">
          Subtasks ({subTasksArr.length} of {task.subtasks.length})
        </p>
        <div className="mb-2 flex flex-col gap-3">
          {task.subtasks.map((subtask) => (
            <SubTask
              subtask={subtask}
              setSubTasksArr={setSubTasksArr}
              task={task}
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

export default TaskModal;
