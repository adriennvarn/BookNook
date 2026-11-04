import { useParams, useNavigate } from "react-router-dom"
import { BookContext } from "../contexts/BookContext"
import { useContext } from "react"
import Navbar from "../components/Navbar"

export default function BookInfo() {
    /* Full card containing book information (cover, title, author, publishing date, etc),
    date read by user, rating in stars, summary of review, and full review. */

    const navigate = useNavigate()

    const { books, deleteBook } = useContext(BookContext)
    const { id } = useParams()
    const book = books.find(book => book.id == id) || null

    // guardrail to protect from rendering undefined objects during deletion
    if (!book) return null

    // image will have coverId OR imageSrc but not both.
    // If imageSrc is blank, render null instead of empty string to prevent errors
    const COVER_URL = "https://covers.openlibrary.org/b/id"
    const imageSrc = book.coverId ? `${COVER_URL}/${book.coverId}-M.jpg` : (book.imageSrc ? book.imageSrc : null)

    const handleDelete = async () => {
        // navigate away immediately to avoid rendering blank screen
        navigate("/", { replace: true })
        // delete triggers in background 
        await deleteBook(book)
    }

    return (
        <>
            <Navbar />
            <div>
                <img src={imageSrc} alt={`Cover of ${book.title}`} />
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <p>Published {book.published}</p>
                <h4>{'★'.repeat(book.stars) + '☆'.repeat(5 - book.stars)}</h4>
                <p>{book.reviewSummary}</p>
                <p>{book.review}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => navigate(`/book/edit/${id}`)}>Update Review</button>
        </>
    )
}