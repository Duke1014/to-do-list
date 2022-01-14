import React from 'react'

export default function Todo({ content, id }) {
    return (
        <div id={id}>
            {content}
        </div>
    )
}
