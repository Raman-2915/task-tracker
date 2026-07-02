import API from "../services/api";
import { toast } from "react-toastify";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function TaskCard({ task, fetchTasks, setEditingTask }) {

  const deleteTask = async () => {

    if (!window.confirm("Delete this task?")) return;

    try {

      await API.delete(`/tasks/${task._id}`);

      toast.success("Task Deleted");

      fetchTasks();

    } catch {

      toast.error("Delete Failed");

    }

  };

  const priorityColor =
    task.priority === "High"
      ? "#ef4444"
      : task.priority === "Medium"
      ? "#f59e0b"
      : "#22c55e";

  const statusClass =
    task.status === "Pending"
      ? "pending"
      : task.status === "In Progress"
      ? "progress"
      : "completed";

  return (
    <div
      className="task-card"
      style={{
        borderLeft: `6px solid ${priorityColor}`,
      }}
    >
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Status:</strong>{" "}
        <span className={`badge ${statusClass}`}>
          {task.status}
        </span>
      </p>

      <p>
        <strong>Priority:</strong>{" "}
        {task.priority}
      </p>

      <p>
        📅{" "}
        {new Date(task.dueDate).toLocaleDateString()}
      </p>

      <p style={{ fontSize: "14px", color: "#6b7280" }}>
        Created{" "}
        {new Date(task.createdAt).toLocaleDateString()}
      </p>

      <div className="actions">

        <button
          className="edit-btn"
          onClick={() => setEditingTask(task)}
        >
          <FaPen/> Edit
        </button>

        <button
          className="delete-btn"
          onClick={deleteTask}
        >
          <FaTrash/> Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;