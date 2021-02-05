import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserProfile from "./components/UserProfile";
import User from './types/User'

export default function App() {
  const [data, setData] = useState<User[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users');
      setData(result.data);
    }
    fetchData();
  }, [])

  const handleNextOnClick = () => {
    const newIndex = index === data.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  }

  const handlePreviousClick = () => {
    const newIndex = index === 0 ? data.length - 1 : index - 1;
    setIndex(newIndex);
  }

  return (
    <div>
      <button type="button" onClick={handleNextOnClick}>Next</button>
      <button type="button" onClick={handlePreviousClick}>Previous</button>
      <UserProfile user={data[index]} />
    </div>
  )
}
