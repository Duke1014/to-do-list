import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import Todo from './Todo'
import TodoCreator from './TodoCreator'
import TodoDelete from './TodoDelete'
import { UserContext } from './context/user'

export default function MyTodos() {

    const [todos, setTodos] = useState([])
    const [error, setError] = useState("")
    const { loggedIn } = useContext(UserContext)

    const todoCheck = (id, e) => {
        fetch(`/todos/${id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({is_done: e.target.checked})
        }).then((r) => r.json())
        .then((todo) => {
            let boolean
            if (todo.is_done) {
                boolean = true
            } else {
                boolean = false
            }
            const newTodos = todos.map(t => id === t.id ? {...t, is_done: boolean} : t)
            setTodos(newTodos)
        })
    }

    useEffect(() => {
        fetch("/me/todos")
        .then((r) => r.json())
        .then(setTodos)
    }, [])

    return (


        <div>
            {loggedIn ? <>
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
                                            content={todo.content}
                                            todoCheck={todoCheck}
                                            category={todo.category.category_name}
                                        />
                                    </td>
                                    <td>
                                        <TodoDelete 
                                            id={todo.id}
                                            setError={setError}
                                            setTodos={setTodos}
                                            todos={todos}
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
                <TodoCreator 
                    error={error} 
                    setError={setError}
                    todos={todos}
                    setTodos={setTodos}
                />
            </> : <>
               <h2>Unauthorized access. Please log in to continue.</h2>     
            </>}
            <br/><br/><br/><br/><br/>
            <button><Link to="/" className="back-button">Back</Link></button>
        </div>
    )
}
