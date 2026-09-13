import { useEffect, useState } from 'react'
import './App.css'

function App(){
  const [message, setMessage] = useState('Connecting to backend...')
  useEffect( () => {
    fetch('/api/health')
      .then(response => response.json())
      .then(data => {
        setMessage(data)
      })
      .catch(error => {
        console.error(error)
        setMessage({status: 'error', message: 'Failed to connect to the backend.'})
      })
  }, []) 

  return(
    <div>
      <h1>Weather Dashboard</h1>
      <p>Search for a city to see the weather</p>
      <p>{message.status}</p>
      <p>{message.message}</p>
    </div>
  )
}

export default App
