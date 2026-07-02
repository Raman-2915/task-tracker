import TaskCard from "./TaskCard";
import { FaTasks } from "react-icons/fa";

function TaskList({
  tasks,
  loading,
  fetchTasks,
  setEditingTask,
}) {

  if (loading) {
    return (
      <div className="loading">
        Loading Tasks...
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="empty">
        <h2><FaTasks/></h2>

        <h3>No Tasks Yet</h3>

        <p>
          Click <strong>New Task</strong> to
          create your first task.
        </p>
      </div>
    );
  }

  return (
    <>

      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Your Tasks ({tasks.length})
      </h2>

      <div className="task-grid">

        {tasks.map((task) => (

          <TaskCard
            key={task._id}
            task={task}
            fetchTasks={fetchTasks}
            setEditingTask={setEditingTask}
          />

        ))}

      </div>

    </>
  );
}

export default TaskList;