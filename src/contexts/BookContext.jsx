import { createContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const BookContext = createContext()

export function BookProvider({ children }) {
    // primary book database
    const [books, setBooks] = useLocalStorage("books")
    // selected book, used for adding to db
    const [selectedBook, setSelectedBook] = useState(null)
    // set search to filter books by
    const [search, setSearch] = useState("")

    function addBook(book) {
        setBooks(prev => {
            const currentArray = Array.isArray(prev) ? prev : []
            return [...currentArray, book]
        })
        setSelectedBook(null)
    }

    function deleteBook(bookToDelete) {
        setBooks((prev) => {
            const currentArray = Array.isArray(prev) ? prev : []
            return currentArray.filter(book => (
                book.id !== bookToDelete.id
            ))
        })
        setSelectedBook(null)
    }

    function updateBook(bookToUpdate, newReview) {
        setBooks((prev) => {
            const currentArray = Array.isArray(prev) ? prev : []
            return currentArray.map(book => book.id == bookToUpdate.id ? { ...book, review: newReview } : book)
        })
        setSelectedBook(null)
    }

    return (
        <BookContext value={{ books, selectedBook, setSelectedBook, addBook, deleteBook, updateBook, search, setSearch }}>
            {children}
        </BookContext>
    )
}