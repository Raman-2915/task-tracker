import { FaSearch } from "react-icons/fa";
function FilterBar({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="card">

      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        <FaSearch/> Search & Filter
      </h2>

      <div className="filter-container">

        <input
          placeholder="Search by title..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option value="All">All Status</option>
          <option value="Pending">
            Pending
          </option>
          <option value="In Progress">
            In Progress
          </option>
          <option value="Completed">
            Completed
          </option>
        </select>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option value="All">
            All Priority
          </option>
          <option value="High">High</option>
          <option value="Medium">
            Medium
          </option>
          <option value="Low">Low</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="">
            Newest
          </option>
          <option value="oldest">
            Oldest
          </option>
          <option value="priority">
            Priority
          </option>
          <option value="dueDate">
            Due Date
          </option>
        </select>

      </div>

    </div>
  );
}

export default FilterBar;