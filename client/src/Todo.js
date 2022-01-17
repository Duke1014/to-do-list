import React, { useState } from 'react'

export default function Todo({ id, todoCheck, is_done, content, category_id }) {

    const [boolean, setBoolean] = useState(false)

    const handleCheck = () => {
        if (is_done) {
            setBoolean(false)
        } else {
            setBoolean(true)
        }
        todoCheck(id, content, category_id, boolean)
    }

    return (
        <div>
            <div className='todo'>
            {/* <div className={boolean ? "complete" : "incomplete"}> */}
                <label>
                    <input 
                        type="checkbox"
                        checked={is_done}
                        onChange={handleCheck}
                    ></input>
                </label>
                {content}
            </div>
        </div>
    )
}
