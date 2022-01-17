import React, { useEffect, useState } from 'react'

export default function TodoCheckBox({ id, is_done, setError, error, content, category_id }) {

    const [boolean, setBoolean] = useState()

    useEffect((is_done) => {
        if (is_done) {
            setBoolean(true)
            console.log("TRUE")
        } else {
            setBoolean(false)
            console.log("FALSE")
        }
    }, [error])

    const handleClick = (e) => {
        e.preventDefault()
        setError("")
        fetch(`/todos/${id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({is_done: boolean, content: content, category_id: category_id })
        }).then(setError("To do checked!"))
    }

    return (
        <div>
            <button 
                type="checkbox" 
                className='check-box' 
                onClick={handleClick}
            >{boolean ? (
               <>CHECK</> 
            ) : (
                <>☐</>
            )}    
            </button>
        </div>
    )
}
