import { useState } from "react";
import Overlay from "../../ui/Overlay";
import Task from "./Task";

function Tasks({ tasks }) {
  const [selectedTask, setSelectedTask] = useState({});
  const [showTask, setShowTask] = useState(false);

  function handleClick(task) {
    setShowTask((e) => !e);
    setSelectedTask(task);
  }

  return (
    <>
      {showTask && (
        <>
          <Overlay onClick={setShowTask} />
          <Task selectedTask={selectedTask} tasks={tasks} />
        </>
      )}

      {tasks.map((task) => (
        <div
          key={task.id}
          className="mb-8 w-[18rem] rounded-md bg-white p-5 shadow-md"
          onClick={() => handleClick(task)}
        >
          <p className="mb-2 text-start font-bold">{task.title}</p>
          <p className="text-start text-xs font-bold text-medium-grey">
            {task.subtasks.length}{" "}
            {task.subtasks.length === 1 ? "Task" : "Tasks"}
          </p>
        </div>
      ))}
    </>
  );
}

export default Tasks;
