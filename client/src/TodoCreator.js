import React, { useState } from 'react'

export default function TodoCreator() {

    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({content: content})
        }).then((r) => {
            console.log(r)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text" 
                        name="content" 
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                </label>
                <button type='submit'>+</button>
            </form>
        </div>
    )
}
