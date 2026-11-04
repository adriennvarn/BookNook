export default function BookCardMini({ book }) {
    /* Mini card to display in BookList. Only shows cover, title and author, stars, summary of review. */

    /* NOTE that image will have coverId OR imageSrc but not both*/
    return (
        <div>
            <img src={null} alt="Blank image" />
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <h4>{'★'.repeat(book.stars) + '☆'.repeat(5 - book.stars)}</h4>
            <p>{book.reviewSummary}</p>
        </div>
    )
}