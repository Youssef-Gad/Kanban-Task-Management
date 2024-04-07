import { useEffect, useState } from "react";

function SubTask({ subtask, setSubTasksArr, task }) {
  const [isChecked, setIsChecked] = useState(subtask.isCompleted);

  useEffect(
    function () {
      subtask.isCompleted = isChecked;
      setSubTasksArr(task.subtasks.filter((subtask) => subtask.isCompleted));
    },
    [subtask, isChecked, task.subtasks, setSubTasksArr],
  );

  return (
    <div className="flex items-center gap-4 rounded-md bg-light-grey p-2 dark:bg-very-dark-grey">
      <input
        type="checkbox"
        className="accent-main-purple"
        checked={isChecked}
        onChange={() => setIsChecked((e) => !e)}
      />
      <p
        className={`${isChecked ? "line-through" : ""} text-xs font-bold sm:text-sm`}
      >
        {subtask.title}
      </p>
    </div>
  );
}

export default SubTask;
