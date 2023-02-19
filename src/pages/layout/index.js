import NavBar from '../../components/nav';
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <>
        <NavBar />
        <main>
            <Outlet />
        </main>
    </>
);


export default Layout;