import { useState } from "react"

function SearchOrder() {

  const[query, setQuery] = useState('')
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