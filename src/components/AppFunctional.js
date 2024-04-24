import React, { useState } from 'react'

export default function AppFunctional() {
    const [value, setValue] = useState('Submit the Form to see this text change')
    const [input, setInput] = useState('')

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setValue(input)
    }

    return (
        <div>
            <h2>{value}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="user-in" onChange={handleInput} />
                <input type="submit" />
            </form>
        </div>
    )
}
