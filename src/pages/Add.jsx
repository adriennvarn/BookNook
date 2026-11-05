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
            <div className="text-center mt-2">
                <h1 className="font-semibold text-2xl text-gray-800">Add a Book Review</h1>
                <div className={`${selectedBook || manualEntry ? "hidden" : ""}`}>
                    <ApiSearch />
                </div>
                <button onClick={() => setManualEntry(!manualEntry)} className="inline-flex items-center justify-center rounded-2xl border border-gray-600 bg-gray-100 my-4 px-8 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus-visible:ring-4 focus-visible:ring-gray-200 focus-visible:outline-none">
                    {manualEntry ? "Return to search" : "Manual entry"}
                </button>
                {/* Once API search result is selected (or manual entry), pass results to... */}
                {selectedBook || manualEntry ? <AddBookForm /> : null}
            </div>
        </>
    )
}