import { useState } from "react";
import SubTask from "./SubTask";

function Task({ selectedTask }) {
  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <div className="fixed right-[30%] top-[20%] z-40 h-[23rem] w-[30rem] rounded-xl bg-white p-8 text-start">
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
        <div className="flex flex-col gap-3">
          {selectedTask.subtasks.map((subtask) => (
            <SubTask subtask={subtask} key={subtask.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Task;
