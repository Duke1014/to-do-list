import React from 'react'

export default function TodoDelete({ id }) {

    const handleDelete = () => {
        fetch(`/todos/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: null
        })
    }

    return (
        <div>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}
