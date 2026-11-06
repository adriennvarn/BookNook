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
        <div id="info" className="p-4 border-1 border-very-dark bg-white/70 rounded-xl flex flex-col text-center w-sm">
            <img src={`${COVER_URL}/${book.coverId}-M.jpg`} className="h-full aspect-2/3 object-cover rounded-md grow" />
            <h1 className="mt-4 md:text-2xl font-semibold text-gray-900 sm:text-xl">{book.title}</h1>
            <h3 className="mt-0 text-md text-gray-800">{book.author}</h3>
            <p className="mt-0 text-md text-gray-800">Published {book.published}</p>
            <button onClick={handleClick} className="inline-flex items-center justify-center rounded-2xl border border-dark bg-light/80 mt-2 px-4 py-1 text-sm font-semibold text-very-dark shadow-sm transition-colors hover:bg-bright/80 focus-visible:ring-4 focus-visible:ring-gray-200 focus-visible:outline-none">Select</button>
        </div>
    )
}