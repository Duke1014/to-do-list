import React, { useEffect, useState } from 'react'

export default function CategoryDropdown({ setSelectedCategoryId, setCategoryName, categoryName }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("/categories")
        .then((r) => r.json())
        .then(setCategories)
    }, [])

    const handleSelect = (e) => {
        setSelectedCategoryId(e.target.value)
    }

    return (
        <div>
            <label>Choose a category: </label>
            <select name="categories" className="category-select" onChange={handleSelect}>
                <option value="">--New Category--</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.category_name}</option>
                ))}
            </select>
            <br/>
            <label>Or create a new category: </label>
            <input 
                type="text"
                name="category-name"
                value={categoryName}
                className="category-creator"
                onChange={e => setCategoryName(e.target.value)}
            /> 
        </div>
    )
}