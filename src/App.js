import './App.css';
import { 
  useRef, 
  useEffect,
  useState, 
} from 'react'
import { io } from 'socket.io-client'
import Join from './Join'
import Room from './Room'

function App() {
  const [room, setRoom] = useState(null)
  const socket = useRef(null)

  useEffect(() => {
    const { REACT_APP_API_URL } = process.env
    socket.current = io(REACT_APP_API_URL + '/client')
  }, [])

  return (
    <div className="App">
      {
        room
        ?
        <Room 
          room={ room }
          socket={ socket } 
        />
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
