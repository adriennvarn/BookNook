import { BookContext } from "../contexts/BookContext"
import { useContext, useEffect } from "react"

export default function BookSearch() {
    /* Menu for searching and filtering book database */

    const { search, setSearch } = useContext(BookContext)

    // empty search on component load
    useEffect(() => {
        setSearch("")
    }, [])

    return (
        <>
            <div id="book-search">
                <h3>Book search</h3>
                <input type="text" placeholder="Search reviews" value={search} onChange={(e) => {setSearch(e.target.value)}} />
            </div>
        </>
    )
}