import Navbar from "../components/Navbar"
import ApiSearch from "../components/ApiSearch"
import { BookContext } from "../contexts/BookContext"
import { useContext } from "react"

export default function Add() {

    const { selectedBook, addBook } = useContext(BookContext)

    return (
        <>
            <Navbar />
            <h1>ADD</h1>
            <div className={`${selectedBook ? "hidden" : ""}`}>
                <ApiSearch />
            </div>
            <button >Manual entry</button>
            {/* Once API search result is selected (or manual entry), pass results to... */}
            <form id="book-form" className={""}>
                <input type="text" placeholder="title" />
                <input type="text" placeholder="author" />
                <p>And so on and so forth...</p>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}