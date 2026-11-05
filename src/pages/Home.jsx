import Navbar from "../components/Navbar"
import BookList from "../components/BookList"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="mx-16">
                <h1>HOME</h1>
                <BookList />
            </div>
        </>
    )
}