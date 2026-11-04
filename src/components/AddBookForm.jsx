import { BookContext } from "../contexts/BookContext"
import { useContext, useState } from "react"

export default function AddBookForm() {
    /* Form to add a book and review to the database */

    const { selectedBook, addBook } = useContext(BookContext)

    // template item
    const blankEntry = {
        title: "",
        author: "",
        published: 0,
        coverId: null,
        imageSrc: "",
    }

    // establish state
    const [entryData, setEntryData] = useState({
        ...blankEntry
    })

    // update running entryData as values change
    const handleChange = (e) => {
        const { name, value } = e.target
        setEntryData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        // TODO if imageSrc is changed, attempt to load src preview
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <img src={null} alt="Cover placeholder" />
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={entryData.title} onChange={handleChange} />
                <input type="text" name="author" placeholder="Author" value={entryData.author} onChange={handleChange} />
                <input type="text" name="published" placeholder="Year published" value={entryData.published} onChange={handleChange} />
                <input type="text" name="imageSrc" placeholder="Image Link" value={entryData.imageSrc} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}