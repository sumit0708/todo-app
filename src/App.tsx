import React, { useState } from 'react';
import './App.css';
import CreateTask from './Components/createTask';
import ListComp from './Components/list';

interface Task { id: Number, description: String, isCompleted: Boolean };

interface AppState { data: Array<Task> };

const App = () => {

    const [todos, updateTodos] = useState<AppState>({
        data: JSON.parse(window.localStorage.getItem('todos') || '[]')
    });

    const onCreateHandler = (obj: { description: String }) => {
        const dataCopy = Object.assign([], todos.data);
        dataCopy.push({
            id: todos.data.length,
            description: obj.description,
            isCompleted: false
        });
        window.localStorage.setItem('todos', JSON.stringify(dataCopy));
        updateTodos({
            data: dataCopy
        });
    }

    const onCompleteHandler = (id: Number) => {
        // const list = Object.assign([], todos.data);
        const dataCopy = Object.assign([], todos.data);
        dataCopy.map((ele: Task, idx) => {
            if (ele.id === id) {
                ele.isCompleted = !ele.isCompleted;
            }
        });
        window.localStorage.setItem('todos', JSON.stringify(dataCopy));
        updateTodos ({
            data: dataCopy
        });
    }

    return (
        <div className="app">
            <h1>ToDo App</h1>
            <CreateTask key={todos.data.length} onCreate={onCreateHandler} />
            <ListComp onComplete={onCompleteHandler} data={todos.data} />
        </div>
    );
}

export default App;

