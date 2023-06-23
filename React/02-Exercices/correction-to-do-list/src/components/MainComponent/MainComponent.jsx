import React, { useState } from 'react';
import ToDoItemForm from '../ToDoItemForm/ToDoItemForm';
import TodoItemDisplay from '../ToDoItemDisplay/ToDoItemDisplay';

const MainComponent = () => {
    const [todo, setTodo] = useState([]);

    const addtoHandler = (newTodo) => {
        setTodo([...todo, newTodo])
    }

    const deleteTodoHandler = (todoId) => {
        setTodo([...todo.filter(x => x.id !== todoId)])
    }
    
    const switchTodoStatuHandler = (todoId) => {
        const oldTodo = todo.find(x => x.id === todoId)
        if(oldTodo) {
            oldTodo.isDone = !oldTodo.isDone
            setTodo([...todo.filter(x => x.id !== todoId), oldTodo])
        }
    }

    return (
        <div className='container'>
            <div className='row my-3 g-2'>
                <div className='col-4'>
                    <div className='p-3 bg-dark rounded text-light'>
                        <ToDoItemForm todoId={todo.length} onAddTodo={addtoHandler}/>
                    </div>
                </div>
                <div className='col-8'>
                <div className='p-3 bg-dark rounded text-light'>
                    <h3>Todos</h3>
                    <hr />
                    {todo.length === 0 && <p>Il n'y a pas de ToDo pour le moment</p>}
                    {todo.length > 0 && todo.sort((x,y) => x.id - y.id).map((todo, index) =>
                    <TodoItemDisplay key={index} todo={todo} deleteTodo={() => deleteTodoHandler(todo.id)}
                    switchTodoStatu={() => switchTodoStatuHandler(todo.id)} />)}
                </div>
            </div>
            </div>
        </div>
    );
}

export default MainComponent;