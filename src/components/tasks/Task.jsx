import React, { useState } from "react";
import Overlay from "../../ui/Overlay";
import TaskModal from "./TaskModal";

function Task({ task }) {
  const [showTask, setShowTask] = useState(false);
  const [subTasksArr, setSubTasksArr] = useState(task.subtasks);

  let completedTasks = 0;
  subTasksArr.map((subTask) => (subTask.isCompleted ? completedTasks++ : null));

  return (
    <>
      {showTask && (
        <>
          <Overlay onClick={setShowTask} />
          <TaskModal
            task={task}
            subTasksArr={subTasksArr}
            setSubTasksArr={setSubTasksArr}
          />
        </>
      )}
      <div
        key={task.id}
        className="mb-8 w-[18rem] cursor-pointer rounded-md bg-white p-5 shadow-md transition-colors duration-300 hover:text-main-purple"
        onClick={() => setShowTask((e) => !e)}
      >
        <p className="mb-2 text-start font-bold">{task.title}</p>
        <p className="text-start text-xs font-bold text-medium-grey">
          {completedTasks} of {task.subtasks.length} subtasks
        </p>
      </div>
    </>
  );
}

export default Task;
