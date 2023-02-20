import Footer from '../../components/footer';
import NavBar from '../../components/nav';
import { Outlet } from 'react-router-dom';
import styles from './style.module.css';

const Layout = () => (
    <>
        <NavBar />
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer />
    </>
);


export default Layout;