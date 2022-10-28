import React from 'react';
import {TaskType} from "./App";


type TodoListPropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: object
}

const TodoList = (props: TodoListPropsType) => {
    // @ts-ignore
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {alert(t.id)}}>x</button>
                        </li>
                    )
                }
            </ul>
                    <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                    </div>
                    </div>
                    );
                };

                export {TodoList};