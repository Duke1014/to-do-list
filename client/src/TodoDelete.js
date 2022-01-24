import React from 'react'

export default function TodoDelete({ id, setError, setTodos, todos }) {

    const handleDelete = () => {
        fetch(`/todos/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: null
        }).then( () =>  {
            setError("To do deleted!")
            const newTodos = todos.filter(t => id !== t.id)
            setTodos(newTodos)
        })
    }

    return (
        <div>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}
