import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from "uuid";


export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type FilterValuesType = 'All' | 'Completed' | 'Active';


function App() {
    //BIL:
    const todoListTitle: string = "What to learn"
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML, CSS", isDone: true},
        {id: v1(), title: "JS & ES6", isDone: false},
        {id: v1(), title: "REACT & TS", isDone: false},

    ]);
    let [filter, setFilter] = useState<FilterValuesType>('All')

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }


    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let taskForTodolist = tasks;
    if (filter === 'Completed') {
        taskForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === 'Active') {
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
                addTask={addTask}
            />

        </div>
    );
}


export default App;
