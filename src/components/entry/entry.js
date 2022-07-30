import React, { useEffect, useState } from 'react'
import getAll from '../../service/entry/entry'

export default function Entry() {

    const entry = "Selam"
    const deneme = "/hello"
    return (
        <div className='flex flex-row entry '>
            <div className="entry-head">

                <a href={deneme}>
                    # {entry} 🤖🤖🤖🤖🤖
                </a>
            </div>
        </div>
    )
}
