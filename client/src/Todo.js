import React from 'react'

export default function Todo({ id, category, todoCheck, is_done, content }) {

    const handleCheck = (e) => {
        e.preventDefault()
        todoCheck(id, e)
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
                <span>{content}  -  {category}</span>
            </div>
        </div>
    )
}
