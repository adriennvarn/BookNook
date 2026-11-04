import { BookContext } from "../contexts/BookContext"
import { useContext } from "react"

const COVER_URL = "https://covers.openlibrary.org/b/id"

export default function Result({ book }) {
    /* Individual result in an API search. */

    const { setSelectedBook } = useContext(BookContext)

    //  Add page listens for this to be set to move on
    const handleClick = () => {
        setSelectedBook(book)
    }

    return (
        <div id="info">
            <img src={`${COVER_URL}/${book.coverId}-M.jpg`} />
            <p><b>Title: </b>{book.title}</p>
            <p><b>Author: </b>{book.author}</p>
            <p>Published {book.published}</p>
            <button onClick={handleClick}>Select</button>
        </div>
    )
}