import Navbar from "../components/Navbar"
import BookList from "../components/BookList"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="p-16 pt-3 bg-light/40 min-h-svh">
                <h2 className="text-center text-2xl font-bold text-very-dark">Your Book Reviews</h2>
                <BookList />
            </div>
        </>
    )
}