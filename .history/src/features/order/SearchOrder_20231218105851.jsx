import { useState } from "react"

function SearchOrder() {

  const[query, setQuery] = useState('')
  return (
    <Form>
    <input 
    placeholder="Search order #" 
    value={query}
    onChange={(e) => setQuery(e.target.value)}
     />
     <Form />
  )
}

export default SearchOrder