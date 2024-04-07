import React, { useState } from "react";
import Overlay from "../../ui/Overlay";
import TaskModal from "../modals/TaskModal";
import { useAppContext } from "../../context/AppContext";

function Task({ task }) {
  const { dispatch } = useAppContext();
  const [subTasksArr, setSubTasksArr] = useState(task.subtasks);
  const [showModal, setShowModal] = useState(false);

  let completedTasks = 0;
  subTasksArr.map((subTask) => (subTask.isCompleted ? completedTasks++ : null));

  return (
    <>
      {showModal && (
        <>
          <Overlay onClick={setShowModal} />
          <TaskModal
            subTasksArr={subTasksArr}
            setSubTasksArr={setSubTasksArr}
            setShowModal={setShowModal}
          />
        </>
      )}

      <div
        key={task.id}
        className="mb-8 w-[14rem] cursor-pointer rounded-md bg-white p-5 shadow-md transition-colors duration-300 hover:text-main-purple sm:w-[18rem] dark:bg-very-dark-grey"
        onClick={() => {
          setShowModal((e) => !e);
          dispatch({ type: "activeTask", payload: task });
        }}
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
