import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";


export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

export type FilterValuesType = 'All' | 'Completed' | 'Active';


function App() {
    //BIL:
    const todoListTitle: string = "What to learn"
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML, CSS", isDone: true},
        {id: 2, title: "JS & ES6", isDone: false},
        {id: 3, title: "REACT & TS", isDone: false},

    ]);
    let [filter, setFilter] = useState<FilterValuesType>('All')

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let taskForTodolist = tasks;
    if ( filter === 'Completed') {
        taskForTodolist = tasks.filter(t => t.isDone === true);
    }
    if ( filter === 'Active') {
        taskForTodolist = tasks.filter(t => t.isDone === false);
    }

    //GUI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={taskForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

        </div>
    );
}


export default App;
