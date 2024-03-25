// @ts-nocheck
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className="Todo">
            <p className={`${task.finalizado ? "finalizado" : "naoFinalizado"}`}
                onClick={() => toggleComplete(task.id)}>
                {task.tarefa}
            </p>
            <div>
                <FontAwesomeIcon
                    className="editIcon"
                    icon={faPenToSquare}
                    onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon
                    className="deleteIcon"
                    icon={faTrash}
                    onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
}

export default Todo;