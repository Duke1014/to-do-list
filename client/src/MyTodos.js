import React, { useEffect, useState } from 'react'

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
                            <Todo key={todo.id} id={todo.id} />
                        </div>
                    ))}
                </div>
            ) : <>
                You have no to-dos.
            </> }
            <TodoCreator setError={setError} />
        </div>
    )
}
