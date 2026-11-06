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
            <div className="text-center pt-2 bg-light/40 min-h-svh">
                <h1 className="font-semibold text-2xl text-very-dark">Add a Book Review</h1>
                <div className={`${selectedBook || manualEntry ? "hidden" : ""}`}>
                    <ApiSearch />
                </div>
                <button onClick={() => setManualEntry(!manualEntry)} className="inline-flex items-center justify-center rounded-2xl border border-dark bg-bright/60 mt-8 mb-4 px-16 py-2 text-sm font-semibold text-very-dark shadow-sm transition-colors hover:bg-bright/80 focus-visible:ring-4 focus-visible:ring-gray-200 focus-visible:outline-none">
                    {manualEntry ? "Return to search" : "Manual entry"}
                </button>
                {/* Once API search result is selected (or manual entry), pass results to... */}
                {selectedBook || manualEntry ? <AddBookForm /> : null}
            </div>
        </>
    )
}