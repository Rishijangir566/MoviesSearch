import React, { useState } from 'react'
import axios from "axios"

function App() {
  const [value , setValue]=useState("") 
  const [data , setData]=useState([]) 

  async function handleClick(){
    const response= await axios.get('https://api.themoviedb.org/3/search/movie?api_key=53d8f78d7dc215c034e3d119a62e8f6a&query='+value)
    // console.log(response)
    setData(response.data.results)
  }

  return (
    <>
    <input type="text" placeholder='Enter Movie Name' value={value}  onChange={(e)=>setValue(e.target.value)} />
       <button onClick={handleClick}>click me</button>

       <ul>
        {data.map((item)=>(
          <li key={item.id}> {item.title}</li>
        ))}
       </ul>
    </>
  )
}

export default App
