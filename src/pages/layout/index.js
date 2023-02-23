import Footer from '../../components/footer';
import NavBar from '../../components/nav';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../components/scroll-to-top';
import styles from './style.module.css';

const Layout = () => (
    <>
        <NavBar />
        <main className={styles.main}>
            <ScrollToTop />
            <Outlet />
        </main>
        <Footer />
    </>
);


export default Layout;