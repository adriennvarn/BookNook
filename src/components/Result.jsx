export default function Result({ book }) {
    /* Individual result in an API search. */
    return (
        <div id="info">
            <p><b>Title: </b>{book.title}</p>
            <p><b>Author: </b>{book.author}</p>
            <p>Published {book.published}</p>
            <p>Cover: wip</p>
            <button>Select</button>
        </div>
    )
}