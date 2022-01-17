import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Todo from './Todo'
import TodoCheckBox from './TodoCheckBox'
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
                            <TodoCheckBox 
                                // key={todo.id} 
                                id={todo.id}
                                setError={setError}
                                is_done={todo.is_done}
                                category_id={todo.category_id}
                                content={todo.content}
                            />
                            <Todo 
                                key={todo.id} 
                                content={todo.content}
                            />
                        </div>
                    ))}
                </div>
            ) : <>
                You have no to-dos.
            </> }
            <br/><br/>
            <TodoCreator className="todo-creator" setError={setError} />
            <br/>
            <button><Link to="/" className="back-button">Back</Link></button>
            <br/><br/>
            {error}
        </div>
    )
}
