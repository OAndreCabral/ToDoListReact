// @ts-nocheck
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos,
        {
            id: uuidv4(),
            tarefa: todo,
            finalizado: false,
            alterandoStatus: false
        }
        ])
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ?
            { ...todo, finalizado: !todo.finalizado } : todo
        ))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ?
                { ...todo, alterandoStatus: !todo.alterandoStatus } : todo
            )
        );
    };

    const editTask = (tarefa, id) => {
        setTodos(
            todos.map((todo) => todo.id === id ?
                { ...todo, tarefa, alterandoStatus: !todo.alterandoStatus } : todo
            )
        );
    };

    return (
        <div className="todoWrapper">
            <h1>Malfeito feito!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.alterandoStatus ? (
                    <EditTodoForm
                        editTodo={editTask}
                        task={todo} />
                ) : (
                    <Todo
                        task={todo}
                        key={index}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            ))}
        </div>
    );
}

export default TodoWrapper;