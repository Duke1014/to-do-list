import React from 'react'

export default function Todo({ id, category, todoCheck, is_done, content, setError }) {
    
    const handleCheck = (e) => {
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
                <span>{content}  -  </span>
                <span>{category}</span>
            </div>
        </div>
    )
}