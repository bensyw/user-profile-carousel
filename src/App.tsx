import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users');
      setData(result.data);
    }
    fetchData();
  }, [])

  const userList = data.map((item) => {
    return (
      <ul>
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.username}</p>
          <p>{item.email}</p>
        </li>
      </ul>
    )
  })

  return (
    <div>
      {userList}
    </div>
  )
}
