import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className="black">
            <div class="nav-wrapper">
                <NavLink
                    className={({ isActive }) => isActive ? classes.active : undefined}
                    to="/" class="brand-logo">AirBnB</NavLink>
                <ul id="nav-mobile" class="right hide-on-med-NavLinknd-down">
                    <li><NavLink
                        to="/host"
                        className={({ isActive }) => isActive ? classes.active : undefined}
                    >Host</NavLink></li>
                    <li><NavLink
                        className={({ isActive }) => isActive ? classes.active : undefined}
                        to="/help">Help</NavLink></li>
                    <li><NavLink
                        className={({ isActive }) => isActive ? classes.active : undefined}
                        to="/login">Login</NavLink></li>
                    <li><NavLink
                        className={({ isActive }) => isActive ? classes.active : undefined}
                        to="/signup">Sign Up</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;