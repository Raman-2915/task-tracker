import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import API from "../services/api";

function Home() {

  const [tasks, setTasks] = useState([]);

  const [editingTask, setEditingTask] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  const [priority, setPriority] = useState("All");

  const [sortBy, setSortBy] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {

    try {

      setLoading(true);

      const res = await API.get("/tasks", {
        params: {
          search,
          status,
          priority,
          sortBy,
        },
      });

      setTasks(res.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchTasks();

  }, [search, status, priority, sortBy]);

  const total = tasks.length;

  const pending = tasks.filter(
    (t) => t.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (t) => t.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  return (
    <>

      <Navbar
        onOpenModal={() => {
          setEditingTask(null);
          setShowModal(true);
        }}
      />

      <div className="container">

        <div className="stats">

          <div className="stat-card">
            <h2>{total}</h2>
            <p>Total Tasks</p>
          </div>

          <div className="stat-card pending-card">
            <h2>{pending}</h2>
            <p>Pending</p>
          </div>

          <div className="stat-card progress-card">
            <h2>{progress}</h2>
            <p>In Progress</p>
          </div>

          <div className="stat-card completed-card">
            <h2>{completed}</h2>
            <p>Completed</p>
          </div>

        </div>

        <FilterBar
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          priority={priority}
          setPriority={setPriority}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <TaskList
          tasks={tasks}
          loading={loading}
          fetchTasks={fetchTasks}
          setEditingTask={(task) => {
            setEditingTask(task);
            setShowModal(true);
          }}
        />

      </div>

      {showModal && (

        <div className="modal-overlay">

          <div className="modal">

            <TaskForm
              fetchTasks={fetchTasks}
              editingTask={editingTask}
              setEditingTask={setEditingTask}
              closeModal={() => {
                setShowModal(false);
                setEditingTask(null);
              }}
            />

          </div>

        </div>

      )}

    </>
  );
}

export default Home;