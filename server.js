const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB = path.join(__dirname, 'tasks.json');

app.use(express.json());
app.use(express.static('public')); // serves index.html

// Helper: read tasks
function readTasks() {
  return JSON.parse(fs.readFileSync(DB, 'utf-8'));
}

// Helper: write tasks
function writeTasks(tasks) {
  fs.writeFileSync(DB, JSON.stringify(tasks, null, 2));
}

// GET all tasks
app.get('/tasks', (req, res) => {
  res.json(readTasks());
});

// POST create task
app.post('/tasks', (req, res) => {
  const { title, status } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const tasks = readTasks();
  const newTask = {
    id: Date.now().toString(),
    title,
    status: status || 'To Do',
    createdAt: new Date().toISOString()
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// PUT update task
app.put('/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  tasks[index] = { ...tasks[index], ...req.body };
  writeTasks(tasks);
  res.json(tasks[index]);
});

// DELETE task
app.delete('/tasks/:id', (req, res) => {
  let tasks = readTasks();
  const exists = tasks.find(t => t.id === req.params.id);
  if (!exists) return res.status(404).json({ error: 'Task not found' });

  tasks = tasks.filter(t => t.id !== req.params.id);
  writeTasks(tasks);
  res.json({ message: 'Task deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
