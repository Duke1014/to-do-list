import React, { useState } from 'react'

import CategoryDropdown from './CategoryDropdown'

export default function GroupTodoCreator({ error, setError, group_id }) {

    const [content, setContent] = useState("")
    const [selectedCategoryId, setSelectedCategoryId] = useState()
    const [categoryName, setCategoryName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        let newTodo
        if (selectedCategoryId) {
            newTodo = {content: content, category_id: selectedCategoryId, is_done: false, group_id: group_id}
        } else {
            newTodo = {content: content, category_id: selectedCategoryId, is_done: false, group_id: group_id, category_attributes: {category_name: categoryName } }
        }
        let configObject = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTodo)
        }
        fetch("/group-todos", configObject)
        .then((r) => {
            if (r.ok) {
                setError("To-Do Successfully Added!")
            } else {
                setError("Invalid To-Do. Be sure to assign a category to the To-Do, and it must not be empty.")
            }
        })
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
