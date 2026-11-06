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

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook({ ...entryData, id: crypto.randomUUID() })
        navigate("/")
    }

    const inputFormatting = "m-3/2 w-full p-2 pl-3 rounded border-gray-300 shadow-sm sm:text-sm"
    const spanFormatting = "px-4 text-sm font-medium text-gray-700 text-right"
    const trFormatting = "*:text-gray-900 *:first:font-medium"

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="justify-center">
                <table className="w-6xl [&_td:first-child]:w-1/6">
                    <tbody className="">
                        <tr className={trFormatting}>
                            <td className={spanFormatting}>Title</td>
                            <td><input type="text" name="title" value={entryData.title} onChange={handleChange} className={inputFormatting} /></td>
                        </tr>
                        <tr className={trFormatting}>
                            <td className={spanFormatting}>Author</td>
                            <td><input type="text" name="author" value={entryData.author} onChange={handleChange} className={inputFormatting} /></td>
                        </tr>
                        <tr className={trFormatting}>
                            <td className={spanFormatting}>Year published</td>
                            <td><input type="text" name="published" value={entryData.published} onChange={handleChange} className={inputFormatting} /></td>
                        </tr>
                        <tr className={`${trFormatting} ${entryData.coverId ? "hidden" : ""}`}>
                            <td className={spanFormatting}>Cover Image URL</td>
                            <td><input type="text" name="imageSrc" value={entryData.imageSrc} onChange={handleChange}
                                className={inputFormatting} /></td>
                        </tr>
                        <tr className={trFormatting}>
                            <td className={spanFormatting}>Rating</td>
                            <td><div className="flex items-center gap-1">
                                <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={handleDecrement}>
                                    -
                                </button><input type="number" name="stars" value={entryData.stars} onChange={handleChange} min="1" max="5" step="1" className="h-10 w-3 rounded-sm border-gray-200 text-center [-moz-appearance:textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                                <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                    onClick={handleIncrement}>
                                    +
                                </button>
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

                <button type="submit" className="inline-flex w-fit my-4 items-center justify-center rounded-2xl border border-gray-600 bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus-visible:ring-4 focus-visible:ring-gray-200 focus-visible:outline-none">Submit</button>
            </form>
        </div>
    )
}