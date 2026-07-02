import { useState, useEffect } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function TaskForm({
  fetchTasks,
  editingTask,
  setEditingTask,
  closeModal,
}) {
  const initialState = {
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    dueDate: "",
  };

  const [task, setTask] = useState(initialState);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setTask({
        title: editingTask.title,
        description: editingTask.description,
        status: editingTask.status,
        priority: editingTask.priority,
        dueDate: editingTask.dueDate.split("T")[0],
      });
    } else {
      setTask(initialState);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.title || !task.description || !task.dueDate) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setSaving(true);

      if (editingTask) {
        await API.put(`/tasks/${editingTask._id}`, task);
        toast.success("Task Updated");
      } else {
        await API.post("/tasks", task);
        toast.success("Task Created");
      }

      fetchTasks();

      setTask(initialState);
      setEditingTask(null);
      closeModal();

    } catch (err) {
      toast.error("Operation Failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <h2 style={{ marginBottom: "20px" }}>
        {editingTask ? "Edit Task" : " Create New Task"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          name="title"
          placeholder="Task title"
          value={task.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Task description"
          value={task.description}
          onChange={handleChange}
        />

        <select
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />

        <button disabled={saving}>
          {saving
            ? "Saving..."
            : editingTask
            ? "Update Task"
            : "Create Task"}
        </button>

        <button
          type="button"
          onClick={() => {
            setEditingTask(null);
            closeModal();
          }}
          style={{
            background: "#6b7280",
            color: "white",
          }}
        >
          Cancel
        </button>

      </form>
    </>
  );
}

export default TaskForm;