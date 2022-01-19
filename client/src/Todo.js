import React from 'react'

export default function Todo({ id, category, todoCheck, is_done, content, category_id, setError }) {

    const handleCheck = () => {
        setError("")
        todoCheck(id, content, category_id, is_done)
        setError("Check!")
    }

    return (
        <div>
            <div className='todo'>
                <label>
                    <input 
                        type="checkbox"
                        checked={is_done}
                        onChange={handleCheck}
                    ></input>
                </label>
                <span>{content}  -  </span>
                <span>{category}</span>
            </div>
        </div>
    )
}
