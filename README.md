# Task Manager App

A full-stack task management web application built with Node.js, Express, and vanilla JavaScript.

**Live Demo:** https://task-app-production-4b27.up.railway.app

---

## Features

- Create, update, and delete tasks
- Mark tasks as To Do / In Progress / Done
- Overall progress bar with live stats
- Weekly and monthly goal tracking
- AI Task Assistant (powered by Claude)
- Dark / Light mode toggle
- User profile and preferences
- Activity log and streak tracker
- Responsive design for web and mobile

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express |
| Database | JSON file (tasks.json) |
| Deployment | Railway |
| AI | Anthropic Claude API |

---

## Getting Started

**Prerequisites:** Node.js v18+

```bash
git clone https://github.com/YOUR_USERNAME/task-app.git
cd task-app
npm install
npm start
```

Open http://localhost:3000 in your browser.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /tasks | Get all tasks |
| POST | /tasks | Create a new task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

---

## Project Structure

```
task-app/
├── server.js        # Express backend
├── tasks.json       # Data store
├── package.json
└── public/
    └── index.html   # Frontend UI
```

---

## Deployment

Deployed on Railway. To redeploy:

```bash
git add .
git commit -m "update"
git push
```

Railway auto-deploys on every push to main.

---

## License

MIT
