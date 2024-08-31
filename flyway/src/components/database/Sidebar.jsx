import { NavLink, Outlet } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { HiOutlineClipboardList } from "react-icons/hi";


const Sidebar = ({children})=>{

    const menuItem = [
        {
            path:"/dashboard",
            name: 'Dashboard',
            /* icon:<HiOutlineClipboardList/> */
        },
        {
            path:"/airline",
            name: 'Airline',
        },
        {
            path:"/aparture",
            name: 'Aparture',
        },
        {
            path:"/departure",
            name:'Departure',
        },
        {
            path:"/airlinesinfo",
            name: 'AirlinesInfo',
        },
        {
            path:"/travellerdetail",
            name: 'Travellerdetail',
        },
        {
            path:"/signup1",
            name: 'SignUp',
        },
        {
            path:"/login1",
            name: 'Login',
        },
        {
            path:"/contact",
            name:'Contact Us'
        }
    ]

    return(
        <div className="container1">
            <div className="sidebar">
                <div className="top_section">
                    <h1>FlyWay</h1>
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