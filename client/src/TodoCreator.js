import React, { useState } from 'react'

import CategoryDropdown from './CategoryDropdown'

export default function TodoCreator({ error, setError }) {

    const [content, setContent] = useState("")
    const [selectedCategoryId, setSelectedCategoryId] = useState()
    const [categoryName, setCategoryName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        console.log(e)
        if (selectedCategoryId) {
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
        } else {
            fetch("/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({content: content, category_id: selectedCategoryId, is_done: false, category_attributes: {category_name: categoryName } })
            }).then((r) => {
                if (r.ok) {
                    setError("To-Do Successfully Added!")
                } else {
                    setError("invalid")
                }
            })
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='to-do-form'>
                    <label className='to-do-creator'>To-do:
                        <input 
                            type="text" 
                            name="content" 
                            value={content}
                            className='to-do-creator'
                            onChange={e => setContent(e.target.value)}
                        />
                    </label>
                    <CategoryDropdown 
                        setCategoryName={setCategoryName} 
                        categoryName={categoryName} 
                        setSelectedCategoryId={setSelectedCategoryId} 
                    />
                    <button className="to-do-submit" type='submit'>Submit</button>
                </div>
            </form>
            <br/><br/><br/><br/>
            <div className='error'>{error}</div>
        </div>
    )
}
