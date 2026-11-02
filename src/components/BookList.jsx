import BookCardMini from "../components/BookCardMini"
import BookSearch from "../components/BookSearch"

export default function BookList() {
    /* List of mini book cards showing all books in database */
    return (
        <>
            <BookSearch />
            {/* foreach book: */}
            <BookCardMini />
        </>
    )
}