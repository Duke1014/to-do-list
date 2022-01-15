import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Todo from './Todo'
import TodoCreator from './TodoCreator'

export default function MyTodos() {

    const [todos, setTodos] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("/me/todos")
        .then((r) => r.json())
        .then(setTodos)
    }, [error])

    return (
        <div>
            {todos.length > 0 ? (
                <div className='user-todos'>
                    {todos.map((todo) => (
                        <div key={todo.id}>
                            <Todo 
                                key={todo.id} 
                                id={todo.id} 
                                content={todo.content} 
                                setError={setError}
                                is_done={todo.is_done}
                                category_id={todo.category_id}
                            />
                        </div>
                    ))}
                </div>
            ) : <>
                You have no to-dos.
            </> }
            <br/><br/>
            <TodoCreator setError={setError} />
            <br/>
            <button><Link to="/" className="back-button">Back</Link></button>
            <br/><br/>
            {error}
        </div>
    )
}
