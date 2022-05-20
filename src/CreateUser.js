import { useState } from 'react'

export default function CreateUser({ accessCode, setUser }) {
    const [username, setUsername] = useState('')

    const handleChange = e => setUsername(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(username)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                name="username"
                value={ username }
                onChange={ handleChange} 
            />
            <button>Join Room</button>
        </form>
    )
}