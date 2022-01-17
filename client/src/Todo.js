import React from 'react'

export default function Todo({ content }) {

    return (
        <div>
            <div>
                <div className="to-do-content">{content}</div>
            </div>
        </div>
    )
}
