import React from 'react'

export default function TodoDelete({ id, setError }) {

    const handleDelete = () => {
        setError("")
        fetch(`/todos/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: null
        }).then(setError("Todo successfully deleted."))
    }

    return (
        <div>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}
