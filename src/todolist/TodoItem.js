import React from "react"
import "./todo.css"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div 
            className="todo-item"
            onClick={() => props.handleChange(props.todo.id)}
        >
            <input 
                onChange={() => {}} 
                name="completed" 
                type="checkbox" 
                checked={props.todo.completed}
            />
            <p style={props.todo.completed ? completedStyle : null}>{props.todo.text}</p>
        </div>
    )    
}

export default TodoItem