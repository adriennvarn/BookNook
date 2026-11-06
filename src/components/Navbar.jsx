import { NavLink } from "react-router-dom"

export default function Navbar() {
    /* Navbar */
    return (
        <nav className="sticky top-0 z-40 border-b border-gray-300 bg-dark backdrop-blur">
            <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6 text-white">
                <div>
                    <h3 className="font-semibold tracking-tight text-white text-xl">BookNook</h3>
                    <p className="text-sm ">Your Book Review Database</p>
                </div>
                <ul className="flex items-center gap-8 text-sm text-white/90">
                    <li className="transition hover:text-white"><NavLink to="/">Home</NavLink></li>
                    <li className="transition hover:text-white"><NavLink to="/add">New Review</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}