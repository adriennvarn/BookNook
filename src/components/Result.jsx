import { useFetchData } from "../hooks/useFetchData"

const COVER_URL = "https://covers.openlibrary.org/b/id"

export default function Result({ book }) {
    /* Individual result in an API search. */

    return (
        <div id="info">
            <img src={`${COVER_URL}/${book.coverId}-M.jpg`} />
            <p><b>Title: </b>{book.title}</p>
            <p><b>Author: </b>{book.author}</p>
            <p>Published {book.published}</p>
            <button>Select</button>
        </div>
    )
}