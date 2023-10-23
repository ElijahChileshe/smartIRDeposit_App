import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Links</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default Navbar   