import React, { useState, useRef } from 'react';

function TaskForm({ addTask }) {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value,
            completed: false
        };
        addTask(task);
        nameRef.current.value = '';
        descriptionRef.current.value = '';
        dateRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} placeholder="Nom de la tâche" required class="form-control me-2" aria-label="Nom de la tache" />
            <textarea ref={descriptionRef} placeholder="Description de la tâche" required class="form-control me-2" aria-label="Description de la tache"></textarea>
            <input type="date" ref={dateRef} required class="form-control me-2" aria-label="Date" />
            <button type="submit" class="btn btn-success">Ajouter une tâche</button>
        </form>
    );
}

function Task({ task, onComplete, onDelete }) {
    const handleComplete = () => {
        onComplete(task);
    };

    const handleDelete = () => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche?')) {
            onDelete(task);
        }
    };

    return (
        <div>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Date: {task.date}</p>
            <p>Statut: {task.completed ? 'Terminée' : 'En cours'}</p>
            {!task.completed && (
                <button onClick={handleComplete} class="btn btn-success">Valider</button>
            )}
            <button onClick={handleDelete} class="btn btn-danger">Supprimer</button>
        </div>
    );
}

function TaskList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const completeTask = (completedTask) => {
        const updatedTasks = tasks.map((task) => {
            if (task === completedTask) {
                return { ...task, completed: true };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const deleteTask = (deletedTask) => {
        const updatedTasks = tasks.filter((task) => task !== deletedTask);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>Ajouter une tâche</h2>
            <TaskForm addTask={addTask} />
            <h2>Liste des tâches</h2>
            {tasks.map((task) => (
                <Task
                    key={task.name}
                    task={task}
                    onComplete={completeTask}
                    onDelete={deleteTask}
                />
            ))}
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Application de gestion des tâches</h1>
            <TaskList />
        </div>
    );
}

export default App;