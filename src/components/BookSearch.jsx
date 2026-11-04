import { BookContext } from "../contexts/BookContext"
import { useContext } from "react"

export default function BookSearch() {
    /* Menu for searching and filtering book database */

    const { search, setSearch } = useContext(BookContext)

    return (
        <>
            <div id="book-search">
                <h3>Book search</h3>
                <input type="text" placeholder="Search reviews" value={search} onChange={(e) => {setSearch(e.target.value)}} />
            </div>
        </>
    )
}