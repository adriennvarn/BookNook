import { useContext } from "react"
import { BookContext } from "../contexts/BookContext"
import BookCard from "./BookCard"
import BookSearch from "../components/BookSearch"

export default function BookList() {
    /* List of mini book cards showing all books in database */

    const { books, search } = useContext(BookContext)

    const filteredBooks = (books || []).filter((book) => 
        Object.values(book).some(val =>
            typeof val == "string" && val.toLowerCase().includes(search.toLowerCase())
        )
    )

    return (
        <>
            <BookSearch />
            {filteredBooks.map(book => (<BookCard key={book.id} book={book} />))}
        </>
    )
}