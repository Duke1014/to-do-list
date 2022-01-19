import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Todo from './Todo'
import TodoCreator from './TodoCreator'
import TodoDelete from './TodoDelete'


export default function MyTodos() {

    const [todos, setTodos] = useState([])
    const [error, setError] = useState("")
    
    useEffect(() => {
        fetch("/me/todos")
        .then((r) => r.json())
        .then(setTodos)
    }, [error])

    const todoCheck = (id, content, category_id, boolean) => {
        fetch(`/todos/${id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({is_done: boolean, content: content, category_id: category_id })
        })
    }

    return (
        <div>
            {todos.length > 0 ? (
                <table className='user-todos'>
                    {todos.map((todo) => (
                        <tbody key={todo.id}>
                            <tr key={todo.id} >
                                <td>
                                    <Todo 
                                        key={todo.id} 
                                        id={todo.id}
                                        is_done={todo.is_done}
                                        category_id={todo.category_id}
                                        content={todo.content}
                                        todoCheck={todoCheck}
                                        category={todo.category.category_name}
                                    />
                                </td>
                                <td>
                                    <TodoDelete 
                                        id={todo.id}
                                        error={error}
                                        setError={setError}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            ) : <>
                You have no to-dos.
            </> }
            <br/><br/>
            <TodoCreator error={error} setError={setError} className="todo-creator" />
            <br/><br/><br/><br/><br/>
            <button><Link to="/" className="back-button">Back</Link></button>
            <br/><br/>
        </div>
    )
}
