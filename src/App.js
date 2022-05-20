import './App.css';
import { 
  useRef, 
  useEffect,
  useState, 
} from 'react'
import { io } from 'socket.io-client'
import Join from './Join'

function App() {
  const [room, setRoom] = useState(null)
  const socket = useRef(null)

  useEffect(() => {
    const { REACT_APP_API_URL } = process.env
    socket.current = io(REACT_APP_API_URL)
  }, [])

  return (
    <div className="App">
      {
        room
        ?
        <p>{ room.accessCode }</p>
        :
        <Join 
          socket={ socket }
          setRoom={ setRoom } 
        />
      }
    </div>
  );
}

export default App;
