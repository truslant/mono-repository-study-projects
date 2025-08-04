import { NavLink } from "react-router-dom"
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/frozenFood' className={({ isActive }) => isActive ? classes.active : undefined}>Frozen Food</NavLink>
                </li>
                <li>
                    <NavLink to='/meat' className={({ isActive }) => isActive ? classes.active : undefined}>Meat</NavLink>
                </li>
                <li>
                    <NavLink to='/produce' className={({ isActive }) => isActive ? classes.active : undefined}>Produce</NavLink>
                </li>
            </ul>
        </>

    )
}

export default NavBar