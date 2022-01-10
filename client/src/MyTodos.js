import React, { useEffect, useState } from 'react'

export default function MyTodos() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch("/me/todos")
        .then((r) => r.json())
        .then(setTasks)
    }, [])



    return (
        <div>
            hello
        </div>
    )
}
