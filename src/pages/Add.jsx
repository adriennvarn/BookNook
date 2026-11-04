import Navbar from "../components/Navbar"
import ApiSearch from "../components/ApiSearch"

export default function Add() {

    return (
        <>
            <Navbar />
            <h1>ADD</h1>
            <ApiSearch />
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