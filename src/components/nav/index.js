import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import style from './style.module.css';

const NavBar = () => {

    return (
        <div className={style.nav}>
            <header className={style.header}>
                <NavLink to='/'>
                    <img className={style.logo} src={logo} alt='' />
                </NavLink>
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
                                to="/services"
                                className={({ isActive }) =>
                                    isActive ? style.active : undefined
                                }
                                end
                            >
                                Services
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
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? style.active : undefined
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header >
        </div>
    );
}

export default NavBar;