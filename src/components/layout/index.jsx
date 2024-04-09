import NavigationBar from '../navigationBar';
import { Outlet } from "react-router-dom";
import Footer from '../footer';

export default function Layout() {
    return (
        <>
        < NavigationBar />
        < Outlet />
        < Footer />
        </>  
    )
}
