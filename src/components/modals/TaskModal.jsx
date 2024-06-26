import { useState } from "react";
import SubTask from "../tasks/SubTask";
import { useAppContext } from "../../context/AppContext";
import DropBox from "../../ui/DropBox";

function TaskModal({ subTasksArr, setSubTasksArr, setShowModal }) {
  const { activeBoard, dispatch, activeTask: task } = useAppContext();
  const [currentStauts, setCurrentStatus] = useState(task.status);
  const [showDropBox, setShowDropBox] = useState(false);

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
    <div className="fixed right-7 top-20 z-40 w-[20rem] rounded-xl bg-white p-8 text-start dark:bg-dark-grey sm:right-[30%] sm:top-[4%] sm:min-h-[23rem] sm:w-[30rem]">
      <div className="relative mb-3 flex items-center justify-between">
        <p className="text-xl font-bold">{task.title}</p>
        <div
          className="flex h-8 w-4 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 hover:bg-light-grey dark:hover:bg-very-dark-grey"
          onClick={() => setShowDropBox((e) => !e)}
        >
          <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#828FA3" fillRule="evenodd">
              <circle cx="2.308" cy="2.308" r="2.308" />
              <circle cx="2.308" cy="10" r="2.308" />
              <circle cx="2.308" cy="17.692" r="2.308" />
            </g>
          </svg>
        </div>
        {showDropBox && <DropBox type="task" setShowModal={setShowModal} />}
      </div>
      <p className="mb-5 text-sm font-bold text-medium-grey">
        {task.description === "" ? "No Description" : task.description}
      </p>
      <div>
        <p className="mb-5 text-sm font-bold text-medium-grey">
          Subtasks ({subTasksArr.length} of {task.subtasks.length})
        </p>
        <div className="mb-2 grid grid-cols-2 gap-3">
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
          className="w-full rounded-md border-2 border-[#828fa366] p-2 text-sm font-semibold focus:border-main-purple dark:bg-dark-grey"
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
