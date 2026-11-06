import { useContext, useState } from "react"
import { BookContext } from "../contexts/BookContext"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

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

    const [entryData, setEntryData] = useState({ ...book })

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

    // increment and decrement buttons for rating in stars
    const handleIncrement = (e) => {
        setEntryData((prevData) => ({
            ...prevData,
            stars: (prevData.stars >= 5) ? 5 : ((prevData.stars < 1) ? 1 : prevData.stars + 1)
        }))
    }
    const handleDecrement = (e) => {
        setEntryData((prevData) => ({
            ...prevData,
            stars: (prevData.stars > 5) ? 5 : ((prevData.stars <= 1) ? 1 : prevData.stars - 1)
        }))
    }

    const inputFormatting = "m-3/2 w-full p-2 pl-3 rounded border-gray-800 bg-white/70 shadow-sm sm:text-sm"
    const spanFormatting = "px-4 text-sm font-medium text-black text-right"
    const trFormatting = "*:p-1 *:text-black *:first:font-medium"

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center bg-light/40 min-h-svh pt-6">
                <div>
                    <img src={imageSrc} alt={`Cover of ${book.title}`} className="rounded-md" />
                    <h3 className="mt-4 md:text-2xl font-semibold text-gray-900 sm:text-xl">{book.title}</h3>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <table className="w-6xl [&_td:first-child]:w-1/6">
                        <tbody className="">
                            <tr className={trFormatting}>
                                <td className={spanFormatting}>Rating</td>
                                <td><div className="flex items-center gap-1">
                                    <div className="bg-white/70 rounded border-gray-800 shadow-sm mb-1">
                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={handleDecrement}>
                                            -
                                        </button><input type="number" name="stars" value={entryData.stars} onChange={handleChange} min="1" max="5" step="1" className="h-10 w-3 rounded-sm border-gray-200 text-center [-moz-appearance:textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                            onClick={handleIncrement}>
                                            +
                                        </button>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr className={trFormatting}>
                                <td className={spanFormatting}>Review summary</td>
                                <td><input type="text" name="reviewSummary" value={entryData.reviewSummary} onChange={handleChange} className={inputFormatting} /></td>
                            </tr>
                            <tr className={trFormatting}>
                                <td className={spanFormatting}>Full review</td>
                                <td><textarea name="review" rows="4" value={entryData.review} onChange={handleChange} className={inputFormatting} /></td>
                            </tr>
                        </tbody>
                    </table>

                    <button type="submit" className="inline-flex items-center justify-center rounded-2xl border border-dark bg-light/80 mt-2 px-4 py-1 text-sm font-semibold text-very-dark shadow-sm transition-colors hover:bg-bright/80 focus-visible:ring-4 focus-visible:ring-gray-200 focus-visible:outline-none">Submit</button>
                </form>
            </div>
        </>
    )
}