import React from 'react'


export default function Entry(props) {
    return (
        <div className='flex flex-row entry h-auto'>
            <div className="entry-head">
                <a href={props.link}>
                    #{props.title} 🤖
                </a>
            </div>
            <span className='author'> {props.value} </span>
        </div>
    )
}
