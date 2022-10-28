import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";


export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

function App() {
    //BIL:
    const todoListTitle: string = "What to learn"
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML, CSS", isDone: true},
        {id: 2, title: "JS & ES6", isDone: false},
        {id: 3, title: "REACT & TS", isDone: false},

    ]

    function removeTask(id: number) {
        let resultTasks = tasks.filter((t) => {
            if (t.id !== id) return true
            else return false;
        })


    }

    //GUI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasks}
                removeTask={removeTask}

            />

        </div>
    );
}


export default App;
