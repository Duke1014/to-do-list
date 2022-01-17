import React from 'react'

export default function Todo({ content, is_done }) {

    return (
        <div>
            <div className={is_done ? "completed" : ""}>
                <div className="to-do-content">{content}</div>
            </div>
        </div>
    )
}
