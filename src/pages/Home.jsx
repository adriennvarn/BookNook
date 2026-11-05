import Navbar from "../components/Navbar"
import BookList from "../components/BookList"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="m-16 mt-3">
                <h2 className="text-center text-2xl font-bold text-gray-800">Your Book Reviews</h2>
                <BookList />
            </div>
        </>
    )
}