import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CategoryForm from './CategoryForm'

export default function CategoryList() {

    const [categories, setCategories] = useState([])
    const [error, setError] = useState("Create a category for to-do's here!")

    useEffect(() => {
        fetch("/categories")
        .then((r) => r.json())
        .then(setCategories)
    }, [error])

    return (
        <div>
            <div className='category-list'>
                {categories.map((category) => (
                    <div key={category.id}>
                        <div>{category.category_name}</div>
                    </div>
                ))}
            </div>
            <br/>
            <CategoryForm setError={setError} />
            <br/>
            <button><Link to="/" className="back-button">Back</Link></button>
            <br/><br/>
            {error}
        </div>
    )
}