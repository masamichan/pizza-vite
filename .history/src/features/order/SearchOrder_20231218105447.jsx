function SearchOrder() {

  const[query, setQuery] = useState('')
  return (
    <input placeholder="Search order #" value={query} />
  )
}

export default SearchOrder