import { FaTasks } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
function Navbar({ onOpenModal }) {
  return (
    <header className="hero">

      <h1><FaTasks/> Task Tracker</h1>

      <p>
        Manage your daily tasks efficiently
      </p>

      <button
        className="new-task-btn"
        onClick={onOpenModal}
      >
        <FaPlus/> New Task
      </button>

    </header>
  );
}

export default Navbar;