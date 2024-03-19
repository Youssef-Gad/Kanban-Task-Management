import { useState } from "react";

function SubTask({ subtask }) {
  const [isChecked, setIsChecked] = useState(subtask.isCompleted);

  return (
    <div className="flex gap-4 rounded-md bg-light-grey p-2">
      <input
        type="checkbox"
        className="accent-main-purple"
        checked={isChecked}
        onChange={() => setIsChecked((e) => !e)}
      />
      <p className={`${isChecked ? "line-through" : ""} text-sm font-semibold`}>
        {subtask.title}
      </p>
    </div>
  );
}

export default SubTask;
