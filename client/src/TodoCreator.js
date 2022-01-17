import React, { useState } from 'react'

import CategoryDropdown from './CategoryDropdown'

export default function TodoCreator() {

    const [content, setContent] = useState("")
    const [selectedCategoryId, setSelectedCategoryId] = useState()
    const [error, setError] = useState("")

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
            <form className='to-do-form' onSubmit={handleSubmit}>
                <label>To-do:
                    <input 
                        type="text" 
                        name="content" 
                        value={content}
                        className='to-do-creator'
                        onChange={e => setContent(e.target.value)}
                    />
                </label>
                <CategoryDropdown setSelectedCategoryId={setSelectedCategoryId} />
                <button className="to-do-submit" type='submit'>+</button>
            </form>
            <br/><br/><br/><br/>
            <div className='error'>{error}</div>
        </div>
    )
}
