import React, { useState } from 'react'

import CategoryDropdown from './CategoryDropdown'

export default function TodoCreator({ setError }) {

    const [content, setContent] = useState("")
    const [selectedCategoryId, setSelectedCategoryId] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        fetch("/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({content: content, category_id: selectedCategoryId, is_done: false})
        }).then((r) => {
            if (r.ok) {
                setError("To-Do Successfully Added!")
            } else {
                setError("invalid")
            }
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
                        className='to-do-form'
                        onChange={e => setContent(e.target.value)}
                    />
                </label>
                <CategoryDropdown setSelectedCategoryId={setSelectedCategoryId} />
                <button type='submit'>+</button>
            </form>
        </div>
    )
}
