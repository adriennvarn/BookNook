import { useContext } from "react"
import { BookContext } from "../contexts/BookContext"
import BookCard from "./BookCard"
import BookSearch from "../components/BookSearch"

export default function BookList() {
    /* List of mini book cards showing all books in database */

    const { books } = useContext(BookContext)

    return (
        <>
            <BookSearch />
            {books.map(book => (<BookCard key={book.id} book={book} />))}
        </>
    )
}