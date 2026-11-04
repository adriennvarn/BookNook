import { useState } from "react"
import Result from "../components/Result"
import { useFetchDataMutation } from "../hooks/useFetchData"

const SEARCH_URL = "https://openlibrary.org/search.json"

export default function ApiSearch() {
    /* Pull up and display results from API */

    // fetch hook to call within submit function
    const { execute: fetchData, data, loading, error } = useFetchDataMutation(SEARCH_URL)

    const [books, setBooks] = useState([])

    // template item
    const blankSearch = {
        title: "",
        author: "",
    }

    // establish state
    const [searchData, setSearchData] = useState({
        ...blankSearch
    })

    // update running searchData as values change
    const handleChange = (e) => {
        const { name, value } = e.target
        setSearchData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    // call fetch on submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        setBooks([])
        const params = new URLSearchParams()
        params.append("limit", 3)
        if (searchData.title) {
            params.append("title", searchData.title)
        }
        if (searchData.author) {
            params.append("author", searchData.author)
        }
        try {
            if (loading) { return }
            const result = await fetchData({}, `${SEARCH_URL}?${params}`)
            result.docs.map((book) => {
                const newBook = {
                    id: crypto.randomUUID(),
                    title: book.title,
                    author: book.author_name[0],
                    published: book.first_publish_year,
                    coverId: book.cover_i
                }
                setBooks((prev) => [...prev, newBook])
            })
        } catch (err) {
            console.error("Fetch failed:", err)
        }
    }

    return (
        <>
            <div>
                <form id="api-search-form" onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Title" value={searchData.title} onChange={handleChange} />
                    <input type="text" name="author" placeholder="Author" value={searchData.author} onChange={handleChange} />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div id="search-loading" className={`${loading ? "" : "hidden"}`}><p>Loading...</p></div>
            <div id="search-error" className={`${error ? "": "hidden"}`}><p>Error: {error}</p></div>
            <div id="results" className={`${data ? "" : "hidden"}`}>
                {books.map((book) => (
                    <Result key={book.id} book={book} />
                ))}
            </div>
        </>
    )
}