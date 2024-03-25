// @ts-nocheck
import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.tarefa);

    const handleSubmit = (event) => {

        event.preventDefault();

        if (value) {
            editTodo(value, task.id);
            setValue("");
        }
    }

    return (
        <form
            className="todoForm"
            onSubmit={handleSubmit}>
            <input
                type="text"
                className="todoInput"
                value={value}
                placeholder="Atualizar tarefa?"
                onChange={(event) => setValue(event.target.value)}
            />
            <button
                type="submit"
                className="todoButton">Editar tarefa
            </button>
        </form>
    );
}

export default EditTodoForm;