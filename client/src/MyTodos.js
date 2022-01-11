import React, { useEffect, useState } from 'react'

import Todo from './Todo'
import TodoCreator from './TodoCreator'

export default function MyTodos() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("/me/todos")
        .then((r) => r.json())
        .then(setTodos)
    }, [])

    

    return (
        <div>
            {todos.length > 0 ? (
                <div className='user-todos'>
                    {todos.map((todo) => (
                        <div key={todo.id}>
                            <Todo />
                        </div>
                    ))}
                </div>
            ) : <>
                You have no to-dos.
            </> }
            <TodoCreator />
        </div>
    )
}
