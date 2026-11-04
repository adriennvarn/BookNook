import { NavLink } from "react-router-dom"

export default function Navbar() {
    /* Navbar */
    return (
        <nav>
            <h3>BookNook</h3>
            <p>Your Book Review Database</p>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/add">New Review</NavLink></li>
            </ul>
        </nav>
    )
}