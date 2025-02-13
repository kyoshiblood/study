import { useEffect, useState } from "react"
import api from "./services/api"

import './css/App.css'
import { User } from "./components/User";

interface IUser {
    username: string;
    email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/users')
      const { users } = data

      setUsers(users)
    }
    
    fetchData();
  }, [])

  return (
    <div id="container">
      <div id="users">
        <h2>All users:</h2>
        {users.map((user) => <User key={user.email} user={user} />)}
      </div>
    </div>
  )
}

export default App
