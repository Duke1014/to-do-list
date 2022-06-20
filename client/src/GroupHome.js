import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { UserContext } from './context/user'

import GroupTodo from './GroupTodo'
import GroupTodoDelete from './GroupTodoDelete'
import GroupTodoCreator from './GroupTodoCreator'

export default function GroupHome() {

    const { id } = useParams()
    const [groupTodos, setGroupTodos] = useState([])
    const [error, setError] = useState("")
    const { loggedIn } = useContext(UserContext)

    const todoCheck = (id, e) => {
        fetch(`/group-todos/${id}`, {
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
            const newGroupTodos = groupTodos.map(t => id === t.id ? {...t, is_done: boolean} : t)
            setGroupTodos(newGroupTodos)
        })
    }

    useEffect(() => {
        fetch(`/group/${id}/todos/`)
        .then((r) => r.json())
        .then(setGroupTodos)
    }, [])

    return (
        <div>
            {loggedIn ? <>
                <h3>Group To-Do List</h3>
                {groupTodos.length > 0 ? (
                    <table className='group-todos'>
                        {groupTodos.map((todo) => (
                            <tbody key={todo.id}>
                                <tr key={todo.id} >
                                    <td>
                                        <GroupTodo
                                            key={todo.id} 
                                            id={todo.id}
                                            is_done={todo.is_done}
                                            category_id={todo.category_id}
                                            content={todo.content}
                                            todoCheck={todoCheck}
                                            category={todo.category.category_name}
                                            setError={setError}
                                        />
                                    </td>
                                    <td>
                                        <GroupTodoDelete 
                                            id={todo.id}
                                            error={error}
                                            setError={setError}
                                            groupTodos={groupTodos}
                                            setGroupTodos={setGroupTodos}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                ) : <>
                    Your group has no to-dos.
                </> }
                <br/><br/>
                <GroupTodoCreator 
                    group_id={id} 
                    error={error} 
                    setError={setError} 
                    className="todo-creator" 
                    groupTodos={groupTodos}
                    setGroupTodos={setGroupTodos}
                />
            </> : <>
                <h2>Unauthorized access. Please log in to continue.</h2>
            </>}
            <br/><br/><br/><br/><br/>
            <button><Link to="/" className="back-button">Back</Link></button>
        </div>
    )
}
