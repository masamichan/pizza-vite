import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SearchOrder() {

  const[query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const navigate = useNavigate()
  }

  return (
    <form>
      <input 
      placeholder="Search order #" 
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchOrder