import { useContext } from "react"
import { BookContext } from "../contexts/BookContext"
import BookCardMini from "../components/BookCardMini"
import BookSearch from "../components/BookSearch"

export default function BookList() {
    /* List of mini book cards showing all books in database */

    const { books } = useContext(BookContext)

    return (
        <>
            <BookSearch />
            {books.map(book => (<BookCardMini key={book.id} book={book} />))}
        </>
    )
}