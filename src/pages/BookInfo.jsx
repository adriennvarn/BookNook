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
    const imageSrc = book.coverId ? `${COVER_URL}/${book.coverId}-L.jpg` : (book.imageSrc ? book.imageSrc : null)

    const handleDelete = async () => {
        // navigate away immediately to avoid rendering blank screen
        navigate("/", { replace: true })
        // delete triggers in background 
        await deleteBook(book)
    }


    const btFormatting = "inline-flex items-center justify-center rounded-2xl border border-gray-600 bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus-visible:ring-4 focus-visible:ring-gray-200 focus-visible:outline-none"
    const textFormatting = "mt-2 text-gray-800 self-center w-fit max-w-xl"
    
    return (
        <>
            <Navbar />
            <div className="m-16 mt-3 flex flex-col items-center text-center">
                <div className="flex flex-col items-center">
                    <img src={imageSrc} alt={`Cover of ${book.title}`} className="max-w-xl"/>
                    <h2 className="mt-4 md:text-2xl font-semibold text-gray-900 sm:text-xl">{book.title}</h2>
                    <h2 className="mt-0 text-lg text-gray-800">{book.author}</h2>
                    <p className="mt-0 text-sm text-gray-800">Published {book.published}</p>
                    <h4 className="text-xl text-gray-900">{"★".repeat(book.stars) + "☆".repeat(5 - book.stars)}</h4>
                    <p className={textFormatting}>{book.reviewSummary}</p>
                    <p className={textFormatting}>{book.review}</p>
                </div>
                <div className="mt-5 flex gap-2"> 
                    <button onClick={handleDelete} className={btFormatting}>Delete</button>
                    <button onClick={() => navigate(`/book/edit/${id}`)} className={btFormatting}>Update Review</button>
                </div>
            </div>
        </>
    )
}