import Navbar from "../components/Navbar"
import ApiSearch from "../components/ApiSearch"
import { BookContext } from "../contexts/BookContext"
import { useContext, useState } from "react"
import AddBookForm from "../components/AddBookForm"

export default function Add() {

    const { selectedBook } = useContext(BookContext)
    const [manualEntry, setManualEntry] = useState(false)



    return (
        <>
            <Navbar />
            <h1>ADD</h1>
            <div className={`${selectedBook || manualEntry ? "hidden" : ""}`}>
                <ApiSearch />
            </div>
            <button onClick={() => setManualEntry(true)}>Manual entry</button>
            {/* Once API search result is selected (or manual entry), pass results to... */}
            {selectedBook || manualEntry ? <AddBookForm /> : null}
        </>
    )
}