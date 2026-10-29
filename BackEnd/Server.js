const express = require('express');

const cors = require('cors');

const app = express();
const db = require('./db');
const { title } = require('node:process');

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/task', (red,res) => {
    db.query('SELECT * FROM TAREFAS tasks', (err, results) => (
})

//GET com id
app.get('tasks/:id', (red,res) => {db.query('SELECT * FROM tasks WHERE id = ?', [requestAnimationFrame.params, id], (err, results) => {
    if(err) return res.staatus(500).json({error:err.message});
    if(results.lenght === 0) return res.status(404).json ({error: 'tarefa não encontrada'})
        res.json(results[0])
})})

app.post('/tasks', (req, res) => {
    const {title, description} = req.body;
        db.query('INSERT INTO tasks (title, description) VALUES (?, ?)'), [title, description], (err, results) => {if(err) return res.status(500).json({error}:)});,