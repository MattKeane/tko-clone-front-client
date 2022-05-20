import { useState } from 'react'

export default function Join({ socket }) {
    const [roomCode, setRoomCode] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        socket.current.emit("joinRoom", roomCode, res => {
            console.log(res)
        })
    }

    const handleChange = e => {
        setRoomCode(e.target.value)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="roomCode">Room Code:</label>
            <input 
                type="text" 
                id="roomCode"
                value={ roomCode }
                onChange={ handleChange }
            />
            <button>Join room</button>
        </form>
    )
}