import { useState } from 'react'
// import { useEffect } from 'react'
import axios from "axios"
import dummyImg from "./assets/dummy image.png"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])

  const API_KEY = import.meta.env.VITE_API_KEY;
  const img_base_path = "https://image.tmdb.org/t/p/original"


  async function handleClick(e) {
    e.preventDefault()
    const response = await axios.get(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${searchTerm} &api_key=${API_KEY}`)
    console.log(response.data.results)
    setResults(response.data.results)
  }

  // useEffect(()=>{
  //   handleClick
  // } ,[])

  return (
    <div id='moviefinder'>
      <form action="" onSubmit={handleClick}>
        <input type="text" placeholder='Enter Movie Name' value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />

        <button >click me</button>

      </form>

      <div id='results'>
        {results.length > 0 &&
          results.map((result) => {
            return (
              <div className="result" key={result.id}>
                <img src={result.poster_path ? img_base_path + result.poster_path : dummyImg} alt="" />
                <h3> {result.name || result.original_title || result.original_name}</h3>
              </div>

            )

          })
        }
      </div>


    </div>
  )
}

export default App
