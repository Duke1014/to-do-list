import React, { useState } from 'react'

export default function CategoryForm( { setError } ) {
    
    const [name, setName] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        fetch("/categories", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({category_name: name})
        }).then((r) => {
            if (r.ok) {
                setError("Category saved successfully!")
            } else {
                setError("Invalid Category Name")
            }
        })
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Category Name: <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <button type='submit'>Submit Category</button>
            </form>
        </div>
    )
}
