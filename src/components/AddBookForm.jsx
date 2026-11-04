import { BookContext } from "../contexts/BookContext"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddBookForm() {
    /* Form to add a book and review to the database */

    const { addBook, selectedBook } = useContext(BookContext)
    const navigate = useNavigate()

    // template items
    const blankBook = {
        title: "",
        author: "",
        published: "",
        coverId: null,
        imageSrc: "",
    }
    const blankReview = {
        stars: 5,
        reviewSummary: "",
        review: "",
    }

    // establish state
    const [entryData, setEntryData] = useState(selectedBook ?
        { ...selectedBook, ...blankReview } :
        { ...blankBook, ...blankReview }
    )

    // update running entryData as values change
    const handleChange = (e) => {
        const { name, value } = e.target
        setEntryData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        // TODO if imageSrc is changed, attempt to load src preview every 1 second
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(entryData)
        navigate("/")
    }

    return (
        <div>
            <img src={null} alt="Cover placeholder" />
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={entryData.title} onChange={handleChange} />
                <input type="text" name="author" placeholder="Author" value={entryData.author} onChange={handleChange} />
                <input type="text" name="published" placeholder="Year published" value={entryData.published} onChange={handleChange} />
                <br />
                <input type="text" name="imageSrc" placeholder="Image Link" value={entryData.imageSrc} onChange={handleChange}
                    className={`${entryData.coverId ? "hidden" : ""}`} />
                <br /><br />
                <input type="number" name="stars" value={entryData.stars} onChange={handleChange} min="1" max="5" step="1" />
                <input type="text" name="reviewSummary" placeholder="Review Summary" value={entryData.reviewSummary} onChange={handleChange} />
                <input type="text" name="review" placeholder="Review" value={entryData.review} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}