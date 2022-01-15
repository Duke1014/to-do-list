import React, { useState } from 'react'

export default function Todo({ content, id, is_done, category_id, setError }) {

    const [boolean, setBoolean] = useState(is_done)

    const truthy = () => {
        if (boolean) {
            setBoolean(false)
            console.log(boolean)
        } else {
            setBoolean(true)
            console.log(boolean)
        }
    }

    const handleClick = () => {
        setError("asdasd")
        truthy()
        fetch(`/todos/${id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({is_done: boolean, content: content, category_id: category_id })
        }).then(setError("To do checked!"))
    }

    return (
        <div>
            <div className={is_done ? "completed" : ""}>
                <button type="checkbox" id="myCheck" onClick={handleClick}>☐</button>
                {content}
            </div>
        </div>
    )
}
