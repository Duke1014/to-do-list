import React from 'react'

export default function Todo({ id, category, todoCheck, is_done, content, setError }) {
    
    const handleCheck = (e) => {
        setError("")
        e.preventDefault()
        todoCheck(id, e)
    }

    return (
        <div>
            <div className='todo'>
                <input 
                    type="checkbox"
                    checked={is_done}
                    onChange={handleCheck}
                ></input>
                <span>{content}  -  {category}</span>
            </div>
        </div>
    )
}