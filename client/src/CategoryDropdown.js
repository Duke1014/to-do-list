import React, { useEffect, useState } from 'react'

export default function CategoryDropdown({ setSelectedCategoryId }) {

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
                <option value="">--Please choose an option--</option>
                {categories.map((category) => (
                    <option id={category.id} key={category.id} value={category.id}>{category.category_name}</option>
                ))}
            </select>
        </div>
    )
}
