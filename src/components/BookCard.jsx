export default function BookCard({ book }) {
    /* Mini card to display in BookList. Only shows cover, title and author, stars, summary of review. */

    // image will have coverId OR imageSrc but not both.
    // If imageSrc is blank, render null instead of empty string to prevent errors
    const COVER_URL = "https://covers.openlibrary.org/b/id"
    const imageSrc = book.coverId ? `${COVER_URL}/${book.coverId}-M.jpg` : (book.imageSrc ? book.imageSrc : null)

    return (
        <div>
            <img src={imageSrc} alt={`Cover of ${book.title}`} />
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <h4>{'★'.repeat(book.stars) + '☆'.repeat(5 - book.stars)}</h4>
            <p>{book.reviewSummary}</p>
        </div>
    )
}