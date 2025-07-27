import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
    return (
        <nav>
            <NavLink
                to='/'
                className={({ isActive }) => isActive ? classes.active : undefined}>Home</NavLink>

            {/* <NavLink
                to='/about/us'
                className={({ isActive }) => isActive ? classes.active : undefined}>About</NavLink> */}
        </nav>
    )
}

export default Header