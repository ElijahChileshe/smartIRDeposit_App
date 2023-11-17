import { Link } from "react-router-dom"
import { useLogout } from "../Hooks/Registration/useLogout"


const Navbar = () => {

    const {logout} = useLogout()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Links</h1>
                </Link>
                <nav>
                    <div>
                        <button onClick={handleClick}>Logout</button>
                    </div>
                    <div>
                        <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default Navbar   