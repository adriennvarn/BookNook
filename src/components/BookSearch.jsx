import { BookContext } from "../contexts/BookContext"
import { useContext, useEffect } from "react"

export default function BookSearch() {
    /* Menu for searching and filtering book database */

    const { search, setSearch } = useContext(BookContext)

    // empty search on component load
    useEffect(() => {
        setSearch("")
    }, [setSearch])

    return (
        <>
            <div className="flex justify-center gap-4 mb-4 p-2">
                <h3 className="text-gray-800 translate-y-1/4">Search your books and reviews</h3>
                <input type="text" placeholder="Type here" value={search} onChange={(e) => { setSearch(e.target.value) }}
                    className="p-2 pl-3 w-sm rounded border-gray-400 bg-white/70 shadow-sm sm:text-sm" />
            </div>
        </>
    )
}