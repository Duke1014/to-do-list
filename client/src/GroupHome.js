import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import GroupTodo from './GroupTodo'
import GroupTodoDelete from './GroupTodoDelete'
import GroupTodoCreator from './GroupTodoCreator'

export default function GroupHome() {

    const { id } = useParams()

    const [groupTodos, setGroupTodos] = useState([])
    const [error, setError] = useState("")
    const [ping, setPing] = useState(0)

    const todoCheck = (id, e) => {
        fetch(`/group-todos/${id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({is_done: e.target.checked})
        }).then(setPing(ping + 1))
        .then(setError("!"))
    }

    useEffect(() => {
        let test = true;
        if (test) {
            fetch(`/group/${id}/todos/`)
            .then((r) => r.json())
            .then(setGroupTodos)
            .then(console.log("USEEFFECT FIRED"))
        }
        return () => test = false;
    }, [ping])

    return (
        <div>
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
                                        setPing={setPing}
                                        ping={ping}
                                    />
                                </td>
                                <td>
                                    <GroupTodoDelete 
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
                Your group has no to-dos.
            </> }
            <br/><br/>
            <GroupTodoCreator 
                group_id={id} 
                error={error} 
                setError={setError} 
                className="todo-creator" 
            />
            <br/><br/><br/><br/><br/>
            <button><Link to="/" className="back-button">Back</Link></button>
        </div>
    )
}
