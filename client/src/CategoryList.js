import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from './context/user'

import CategoryForm from './CategoryForm'

export default function CategoryList() {

    const [categories, setCategories] = useState([])
    const [error, setError] = useState("Create a category for to-do's here!")
    const { loggedIn } = useContext(UserContext)

    useEffect(() => {
        fetch("/categories")
        .then((r) => r.json())
        .then(setCategories)
    }, [error])

    return (
        <div className='category-list'>
            {loggedIn ? <>
                <div>
                    {categories.map((category) => (
                        <div key={category.id}>
                            <div>{category.category_name}</div>
                        </div>
                    ))}
                </div>
                <br/>
                <CategoryForm setError={setError} />
                <br/><br/><br/>
                {error}
            </> : <>
                <h2>Unauthorized access. Please log in to continue.</h2>
            </>}
        </div>
    )
}