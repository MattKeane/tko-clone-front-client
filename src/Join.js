import { useState } from 'react'

export default function Join({ socket, setRoom }) {
    const [roomCode, setRoomCode] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        socket.current.emit("joinRoom", roomCode, res => {
            if (res.status === "ok") {
                setRoom(res.room)
            } else {
                setMessage('Invalid Room Code')
            }
        })
    }

    const handleChange = e => {
        setRoomCode(e.target.value)
    }

    return (
        <form onSubmit={ handleSubmit }>
            {
                message
                &&
                <p>{ message }</p>
            }
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