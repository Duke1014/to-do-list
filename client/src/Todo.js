import React, { useState } from 'react'

export default function Todo({ id, todoCheck, is_done, content, category_id }) {

    const [boolean, setBoolean] = useState(is_done)

    const handleCheck = () => {
        setBoolean(!is_done)
        todoCheck(id, content, category_id, boolean)
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
                {content}
            </div>
        </div>
    )
}
