import {Link, Outlet} from 'react-router-dom'

const NavBar = ()=>{

    return(
        <div className='container mt-2 w-50'>
            <nav className='navbar  navbar-expand-lg navbar-light bg-light' data-bs-theme="light">
                <ul className='navbar-nav'>
                    <li className='navbar-item'>
                        <Link className='nav-link' to="/seats">Seats</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className='nav-link' to="/meals">Meals</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className='nav-link' to="/lagugge">Bagagge</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}
export default NavBar;