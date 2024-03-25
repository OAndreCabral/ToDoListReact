// @ts-nocheck
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        if (value) {
            addTodo(value);
            setValue("");
        }
    };

    return (
        <form
            className="todoForm"
            onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                className="todoInput"
                placeholder="Qual a tarefa de hoje?"
                onChange={(event) => setValue(event.target.value)}
            />
            <button
                type="submit"
                className="todoButton">Adicionar Tarefa
            </button>
        </form>
    );
}

export default TodoForm;