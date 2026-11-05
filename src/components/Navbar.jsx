import { NavLink } from "react-router-dom"

export default function Navbar() {
    /* Navbar */
    return (
        <nav className="sticky top-0 z-40 border-b border-gray-300 bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
                <div>
                    <h3 className="font-semibold tracking-tight text-gray-900 text-lg">BookNook</h3>
                    <p className="text-sm text-gray-700">Your Book Review Database</p>
                </div>
                <ul className="flex items-center gap-8 text-sm text-gray-700">
                    <li className="transition hover:text-gray-900"><NavLink to="/">Home</NavLink></li>
                    <li className="transition hover:text-gray-900"><NavLink to="/add">New Review</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}