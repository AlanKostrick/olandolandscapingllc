import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import hamburger from '../../assets/hamburger.jpg';
import logo from '../../assets/logo.png';
import style from './style.module.css';

const NavBar = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div className={style.nav}>
            <header className={style.header}>
                <NavLink onClick={() => setOpen(false)} to='/'>
                    <img className={style.logo} src={logo} alt='' />
                </NavLink>
                <button className={style.hamburger} onClick={() => setOpen(!isOpen)}>
                    {isOpen ? <p>X </p> : <img className={style.hamburgerImg} src={hamburger} alt='' />}
                </button>
                <nav className={isOpen ? style.navMobileOpen : style.navMobileClosed}>
                    <ul className={style.list}>
                        <li>
                            <NavLink
                                onClick={() => setOpen(false)}
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
                                onClick={() => setOpen(false)}
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
                                onClick={() => setOpen(false)}
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
                                onClick={() => setOpen(false)}
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? style.active : undefined
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={() => setOpen(false)}
                                to="/our-work"
                                className={({ isActive }) =>
                                    isActive ? style.active : undefined
                                }
                            >
                                Our Work
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header >
        </div>
    );
}

export default NavBar;