import { NavLink, Outlet } from "react-router-dom";
import './DashboardNav.css'
import { FaBars } from 'react-icons/fa';

const Sidebar = ({children})=>{

    const menuItem = [
        {
            path:"/dashboard",
            name: 'Dashboard',
        },
        {
            path:"/teacher1",
            name: 'Teacher',
        },
        {
            path:"/student1",
            name: 'Student',
        },
        {
            path:"/course",
            name:'Course',
        },
        {
            path:"/question1",
            name: 'Question',
        },
    ]

    return(
        <div className="container1">
            <div className="sidebar">
                <div className="top_section">
                    <h1>Logo</h1>
                    <div className="bars">
                        <FaBars/>
                    </div>
                </div>
            {
              menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active1">
                    <div className="link_text">{item.name}</div>
                </NavLink>
              ))  
            }
            </div>
            <Outlet/>
            <main>{children}</main>
            
        </div>
        
    )
}
export default Sidebar;