import React from 'react'
import { useParams } from 'react-router-dom';

export default function user() {
    const params = useParams
    const {name} = params
    console.warn(name)
    return (
    <div>
        <h2>This is {name} Page</h2>
    </div>
  )
}
