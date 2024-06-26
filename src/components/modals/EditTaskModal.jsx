import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

function EditTaskModal() {
  const { dispatch, setShowEditTask, activeTask } = useAppContext();
  const [newTaskName, setNewTaskName] = useState(activeTask.title);
  const [newTaskDescription, setNewTaskDescription] = useState(
    activeTask.description,
  );
  const [newSubtakName, setNewSubtakName] = useState("");

  function handleEditTask() {
    if (!newSubtakName) return;
    dispatch({
      type: "EditTask",
      payload: {
        title: newTaskName,
        description: newTaskDescription,
        subtasks: { title: newSubtakName, isCompleted: false },
      },
    });
    setShowEditTask(false);
  }

  return (
    <div className="fixed right-7 top-20 z-40 w-[20rem] rounded-xl bg-white p-8 text-start sm:right-[30%] sm:top-[4%] sm:min-h-[23rem] sm:w-[30rem] dark:bg-dark-grey">
      <p className="mb-5 text-xl font-bold">Edit Task</p>
      <div className="mb-5">
        <label className="text-sm font-bold text-medium-grey">Task Name</label>
        <input
          className="focus:shadow-outline appearane-none mb-4 mt-1 w-full rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none dark:border dark:border-lines-dark dark:bg-dark-grey"
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />

        <label className="text-sm font-bold text-medium-grey">
          Description
        </label>
        <textarea
          className="mb-4 w-full border  p-2 font-semibold text-medium-grey outline-none dark:border dark:border-lines-dark dark:bg-dark-grey"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        ></textarea>

        <label className="text-sm font-bold text-medium-grey">Subtask</label>
        <input
          className="focus:shadow-outline my-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none dark:border dark:border-lines-dark dark:bg-dark-grey"
          type="text"
          placeholder="Enter New Subtak Name"
          value={newSubtakName}
          onChange={(e) => setNewSubtakName(e.target.value)}
        />

        <button
          className="mt-5 w-full rounded-full bg-main-purple p-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-main-purple-light"
          onClick={handleEditTask}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditTaskModal;
