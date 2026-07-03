# 📋 Task Tracker

A modern full-stack Task Tracker web application built using the **MERN Stack**. This application helps users efficiently manage their daily tasks by providing features like task creation, updating, deletion, searching, filtering, and sorting through an intuitive and responsive interface.

---

## 🚀 Live Demo

🔗 **Frontend:** https://task-tracker-eight-mocha.vercel.app/

🔗 **Backend API:** https://task-tracker-hp50.onrender.com

> Replace the above links with your deployed URLs.


---

## ✨ Features

- ✅ Create new tasks
- ✅ View all tasks
- ✅ Update existing tasks
- ✅ Delete tasks
- ✅ Search tasks by title
- ✅ Filter tasks by status
- ✅ Filter tasks by priority
- ✅ Sort tasks
- ✅ Responsive design
- ✅ Modal-based Add/Edit Task
- ✅ Toast notifications
- ✅ MongoDB Atlas integration
- ✅ RESTful API architecture

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Axios
- React Toastify
- React Icons
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Deployment

- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 📂 Project Structure

```
TaskTracker/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Raman-2915/task-tracker.git
```

```bash
cd task-tracker
```

---

### 2. Install Dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

---

### 3. Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
```

Create a `.env` file inside the **client** folder.

```env
VITE_API_URL=http://localhost:5000/api
```

---

### 4. Run the Backend

```bash
cd server
npm run dev
```

---

### 5. Run the Frontend

```bash
cd client
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Fetch all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## 🎯 Future Improvements

- User Authentication
- Dark Mode
- Task Categories
- Due Date Reminders
- Drag & Drop Task Management
- Pagination
- Dashboard Analytics

---

## 👨‍💻 Author

**Ramandeep Singh**

GitHub: https://github.com/Raman-2915


---

## 📄 License

This project is developed for educational and portfolio purposes.
