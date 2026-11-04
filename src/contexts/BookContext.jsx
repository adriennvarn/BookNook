import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const BookContext = createContext()

export function BookProvider({ children }) {
    // primary book database
    const [books, setBooks] = useLocalStorage("books")
    // selected book, used for adding to db
    const [selectedBook, setSelectedBook] = useLocalStorage("selectedBook", null)

    function addBook(book, review) {
        setBooks((prev) => [...prev, { book: book, review: review }])
        setSelectedBook = null
    }

    function deleteBook(bookToDelete) {
        setBooks((prev) => prev.filter(book => book.id != bookToDelete.id))
        setSelectedBook = null
    }

    function updateBook(bookToUpdate, newReview) {
        setBooks((prev) => prev.map(book => book.id == bookToUpdate.id
            ? { book: bookToUpdate, review: newReview }
            : book
        ))
        setSelectedBook = null
    }

    return (
        <BookContext value={{books, selectedBook, setSelectedBook, addBook, deleteBook, updateBook}}>
            {children}
        </BookContext>
    )
}