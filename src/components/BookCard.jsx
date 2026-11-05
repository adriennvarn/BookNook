export default function BookCard({ book }) {
    /* Mini card to display in BookList. Only shows cover, title and author, stars, summary of review. */

    // image will have coverId OR imageSrc but not both.
    // If imageSrc is blank, render null instead of empty string to prevent errors
    const COVER_URL = "https://covers.openlibrary.org/b/id"
    const imageSrc = book.coverId ? `${COVER_URL}/${book.coverId}-M.jpg` : (book.imageSrc ? book.imageSrc : null)

    return (
        <div className="p-4 border-1 border-gray-300 rounded-xl">
            <a href={`/book/${book.id}`} className="flex flex-col text-center h-full">
                <img src={imageSrc} alt={`Cover of ${book.title}`} className="h-full aspect-2/3 object-cover rounded-md grow" />
                <div className="flex-none grow-0">
                    <h1 className="mt-4 md:text-2xl font-semibold text-gray-900 sm:text-xl">{book.title}</h1>
                    <h3 className="mt-0 text-md text-gray-800">{book.author}</h3>
                    <h4 className="text-xl text-gray-900">{"★".repeat(book.stars) + "☆".repeat(5 - book.stars)}</h4>
                    <p className="mt-2 max-w-sm text-gray-700 self-center">{book.reviewSummary}</p>
                </div>
            </a>
        </div>
    )
}