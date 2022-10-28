import React, {useState} from 'react';
import {FilterValuesType, TaskType} from "./App";


export type TodoListPropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: (id: string) => void;
    changeFilter: (value: FilterValuesType) => void;
    addTask: (title: string) => void
}


export function TodoList(props: TodoListPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle} onChange={(e) => {
                    setNewTaskTitle(e.currentTarget.value)
                }}/>
                <button onClick={() => {
                    props.addTask(newTaskTitle);
                    setNewTaskTitle("")
                }}>+
                </button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {
                                props.removeTask(t.id)
                            }}>x
                            </button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter('All')
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter('Active')
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter('Completed')
                }}>Completed
                </button>
            </div>
        </div>
    );
};

