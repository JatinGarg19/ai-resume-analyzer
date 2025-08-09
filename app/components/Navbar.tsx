import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo / Link to Home */}
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>

            {/* Link to upload Resume & redirect to upload Page */}
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar
