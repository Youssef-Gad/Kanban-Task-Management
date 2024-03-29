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
    <div className="fixed right-[30%] top-[1%] z-50 min-h-[23rem] w-[30rem] rounded-xl bg-white p-8 text-start">
      <p className="mb-5 text-xl font-bold">Edit Task</p>
      <div className="mb-5">
        <label className="text-sm font-bold text-medium-grey">Task Name</label>
        <input
          className="focus:shadow-outline mb-4 mt-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none"
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />

        <label className="text-sm font-bold text-medium-grey">
          Description
        </label>
        <textarea
          className="mb-4 w-full border  p-2 font-semibold text-medium-grey outline-none"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        ></textarea>

        <label className="text-sm font-bold text-medium-grey">Subtask</label>
        <input
          className="focus:shadow-outline my-1 w-full appearance-none rounded border px-3  py-2 font-semibold text-medium-grey shadow focus:outline-none"
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
