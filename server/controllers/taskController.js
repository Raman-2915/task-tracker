const Task = require("../models/Task");

// GET all tasks
const getTasks = async (req, res) => {
  try {
    const { search, status, priority, sortBy } = req.query;

    let query = {};

    // Search by title
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    // Filter by status
    if (status && status !== "All") {
      query.status = status;
    }

    // Filter by priority
    if (priority && priority !== "All") {
      query.priority = priority;
    }

    let sortOption = { createdAt: -1 };

    if (sortBy === "oldest") {
      sortOption = { createdAt: 1 };
    } else if (sortBy === "dueDate") {
      sortOption = { dueDate: 1 };
    } else if (sortBy === "priority") {
      sortOption = { priority: 1 };
    }

    const tasks = await Task.find(query).sort(sortOption);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single task
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};