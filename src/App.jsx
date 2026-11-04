import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Add from "./pages/Add"
import BookInfo from "./pages/BookInfo"
import BookUpdate from "./pages/BookUpdate"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/book/:id" element={<BookInfo />} />
                <Route path="/book/edit/:id" element={<BookUpdate />} />
            </Routes>
        </BrowserRouter>
    )
}