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

    const inputFormatting = "mt-0.5 w-full p-2 pl-3 rounded border-gray-300 bg-white/70 shadow-sm sm:text-sm"
    const spanFormatting = "text-sm font-medium text-gray-900"

    return (
        <div className="mt-10">
            <div>
                <form id="api-search-form" onSubmit={handleSubmit} className="flex justify-center gap-4">
                    <label htmlFor="title" className="relative">
                        <span className={spanFormatting}>Title</span>
                        <input type="text" name="title" id="title" value={searchData.title} onChange={handleChange}
                            className={inputFormatting} />
                    </label>
                    <label htmlFor="author" className="relative">
                        <span className={spanFormatting}>Author</span>
                        <input type="text" name="author" value={searchData.author} onChange={handleChange}
                            className={inputFormatting} />
                    </label>
                    <button type="submit" className="inline-flex items-center justify-center rounded-2xl border border-dark bg-light/80 mt-2 px-4 py-1 text-sm font-semibold text-very-dark shadow-sm transition-colors hover:bg-bright/80 focus-visible:ring-4 focus-visible:ring-gray-200 focus-visible:outline-none">Search</button>
                </form>
            </div>
            <div id="search-loading" className={`${loading ? "" : "hidden"}`}>
                <div class="text-center mt-6" role="status">
                    <svg
                        className="mx-auto size-8 animate-spin text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>

                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>

                    <p class="mt-2 font-medium text-gray-700">Loading...</p>
                </div>
            </div>
            <div id="search-error" className={`${error ? "" : "hidden"} pt-3 pb-1`}>
                <p className="text-red-700 text-lg"><b>Error:</b> {error}</p>
                <p className="text-gray-900">Please try again later, or click the button below to use manual entry.</p>
            </div>
            <div id="results" className={`${data ? "" : "hidden"} mt-6 lg:col-span-3 flex w-full justify-center`}>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 flex justify-evenly">
                    {(books.length > 0) ? books.map((book) => (
                        <Result key={book.id} book={book} />
                    )) : <p className="pt-4">Your search returned no results. Please try again or use manual entry.</p>}
                </div>
            </div>
        </div>
    )
}