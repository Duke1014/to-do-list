import React from 'react'

export default function TodoDelete({ id, setError, setGroupTodos, groupTodos }) {

    const handleDelete = () => {
        fetch(`/group-todos/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: null
        }).then(() => {
            setError("To do deleted!")
            const newGroupTodos = groupTodos.filter(t => id !== t.id)
            setGroupTodos(newGroupTodos)
        })
    }

    return (
        <div>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}
