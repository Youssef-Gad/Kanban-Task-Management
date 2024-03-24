import Task from "./Task";

function Tasks({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </>
  );
}

export default Tasks;
