import { useContext, useState } from "react"
import { BookContext } from "../contexts/BookContext"
import { useParams, useNavigate } from "react-router-dom"

export default function BookUpdate() {
    /* Update an existing book and review */

    const navigate = useNavigate()

    const { books, updateBook } = useContext(BookContext)
    const { id } = useParams()
    const book = books.find(book => book.id == id) || null

    // guardrail to protect from rendering undefined objects during deletion
    if (!book) return null

    // image will have coverId OR imageSrc but not both.
    // If imageSrc is blank, render null instead of empty string to prevent errors
    const COVER_URL = "https://covers.openlibrary.org/b/id"
    const imageSrc = book.coverId ? `${COVER_URL}/${book.coverId}-M.jpg` : (book.imageSrc ? book.imageSrc : null)

    const [entryData, setEntryData] = useState({...book})

    // update running entryData as values change
    const handleChange = (e) => {
        const { name, value } = e.target
        setEntryData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateBook(entryData)
        navigate("/", { replace: true })
    }

    return (
        <div>
            <div>
                <img src={imageSrc} alt={`Cover of ${book.title}`} />
                <h3>{book.title}</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="number" name="stars" value={entryData.stars} onChange={handleChange} min="1" max="5" step="1" />
                <input type="text" name="reviewSummary" placeholder="Review Summary" value={entryData.reviewSummary} onChange={handleChange} />
                <input type="text" name="review" placeholder="Review" value={entryData.review} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}