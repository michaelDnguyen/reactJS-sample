import React,{Component} from "react"
import todoData from "./TodoData.js"
import TodoItem from "./TodoItem"
import "./todo.css"

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodosList = prevState.todos.map(todo => {
                
                console.log(todo.id + " - " + todo.text)

                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodosList
            }
        })
    }
    
    render() {
        const todoComponents = this.state.todos.map(todo => {
            return (
                <TodoItem
                    todo={todo} 
                    key={todo.id}
                    handleChange={this.handleChange}
                />
            )
        })

        return (
            <div className="todo-list">
                {todoComponents}
            </div>
        )
    }
}

export default TodoList