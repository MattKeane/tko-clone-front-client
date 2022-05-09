import './App.css';
import { useRef, useEffect } from 'react'
import { io } from 'socket.io-client'
import Join from './Join'

function App() {
  const socket = useRef(null)

  useEffect(() => {
    const { REACT_APP_API_URL } = process.env
    socket.current = io(REACT_APP_API_URL)
  }, [])

  return (
    <div className="App">
      <Join socket={ socket } />
    </div>
  );
}

export default App;
