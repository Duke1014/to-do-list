import React, { useState } from 'react'

import CategoryDropdown from './CategoryDropdown'

export default function TodoCreator({ error, setError, todos, setTodos }) {

    const [content, setContent] = useState("")
    const [selectedCategoryId, setSelectedCategoryId] = useState()
    const [categoryName, setCategoryName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        let newTodo
        if (selectedCategoryId) {
            newTodo = {content: content, category_id: selectedCategoryId, is_done: false}
        } else {
            newTodo = {content: content, category_id: selectedCategoryId, is_done: false, category_attributes: {category_name: categoryName } }
        }
        let configObject = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTodo)
        }
        fetch("/todos", configObject)
        .then((r) => {
            if (r.ok) {
                setError("To-Do Successfully Added!")
                r.json()
                .then(result => {
                    let newList = [...todos, result]
                    setTodos(newList)
                })
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
        </div>
    )
}
