import { useState } from "react"
import Result from "../components/Result"
import { useFetchData } from "../hooks/useFetchData"

const SEARCH_URL = "https://openlibrary.org/search.json"
const HEADERS = { "User-Agent": "MyAppName/1.0 (myemail@example.com)" }

export default function ApiSearch() {
    /* Pull up and display results from API */

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

    const handleSubmit = (e) => {
        e.preventDefault()
        const params = new URLSearchParams()
        params.append("limit", 3)
        if (searchData.title) {
            params.append("title", searchData.title)
        }
        if (searchData.author) {
            params.append("author", searchData.author)
        }
        const { data } = useFetchData(`${SEARCH_URL}?${params}`, { headers: HEADERS })
        console.log(data)
    }

    return (
        <>
            <div>
                <form id="api-search-form" onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="author" placeholder="Author" />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div id="results" className="hidden">
                {/* foreach result: */}
                <Result />
            </div>
        </>
    )
}