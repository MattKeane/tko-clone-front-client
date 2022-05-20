import { useState } from 'react'
import CreateUser from './CreateUser'

export default function Room({ room }) {
    const [user, setUser] = useState(null)
    return (
        <>
            <p>Welcome to { room.accessCode }</p>
            {
                !user
                &&
                <CreateUser 
                    accessCode={ room.accessCode }
                    setUser={ setUser }
                />
            }
        </>
    )
}