import React, { useState } from 'react';
import './createTask.css';



const CreateTask = (props: { onCreate: Function }) => {
    const [todo, setTodo] = useState({
        description: ''
    });
    const onClickHandler = () => {
        if(todo.description !== '') {
            props.onCreate({
                description: todo.description
            });
        }
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({
            description: e.target.value
        });
    }
    
    return (
        <div className="wrapper">
            <input className="inputValue" type="text" onChange={onChangeInput}></input>
            <button className="button" onClick={onClickHandler}>Create Task</button>
        </div>
    );
}

export default CreateTask;

