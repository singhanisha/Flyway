import { Outlet,Link } from "react-router-dom";
import './ExamNavBar.css'

const ExamNavBar = ()=>{

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme='dark'>
                <ul className="navbar-nav">
                <img src="https://www.shutterstock.com/shutterstock/photos/2052894734/display_1500/stock-vector-quiz-and-question-marks-trivia-night-quiz-symbol-neon-sign-night-online-game-with-questions-2052894734.jpg" style={{width:'40px' , height:'40px'}}></img>
                <b className="b my-auto ms-3 me-4">Online Quiz</b>
                    <li className="navbar-item">
                        <Link className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to='/teacher'>Teacher</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to='/student'>Student</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to='/admin'>Admin</Link>
                    </li>
                    <li className="navbar-item li float-end">
                        <Link className="nav-link " to='/aboutus'>About Us</Link>
                    </li>
                    <li className="navbar-item li float-end">
                        <Link className="nav-link "  to='/contactus'>Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}
export default ExamNavBar;