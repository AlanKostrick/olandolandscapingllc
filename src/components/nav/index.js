import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const NavBar = () => {

    return (
        <header className={style.header}>
            <nav>
                <ul className={style.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? style.active : undefined
                            }
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? style.active : undefined
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default NavBar;