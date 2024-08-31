import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ExamNavBar from './ExamNavBar';
import Home from '../Link/Home';
import Admin from '../Link/admin/Admin';
import Teacher from '../Link/teacher/Teacher';
import Student from '../Link/student/Student';
import AboutUs from '../Link/aboutus/AboutUs';
import ContactUs from '../Link/contactus/ContactUs';
import DashboardNavBar from '../Link/admin/dashboard/DashboardNavBar';
import Teacher1 from '../Link/admin/dashboard/teacher/Teacher1';
import Student1 from '../Link/admin/dashboard/student/Student1';
import Course from '../Link/admin/dashboard/course/Course';
import AddCourse from '../Link/admin/dashboard/course/AddCourse';
import ViewCourse from '../Link/admin/dashboard/course/ViewCourse';
import Questions from '../Link/admin/dashboard/question/Questions';
import Dashboard from '../Link/admin/dashboard/Dashboard';
import EditCourse from '../Link/admin/dashboard/course/EditCourse';
import AddQuestions from '../Link/admin/dashboard/question/AddQuestions';
import ViewQuestion from '../Link/admin/dashboard/question/ViewQuestion';
import EditQuestion from '../Link/admin/dashboard/question/EditQuestion';
import View from '../Link/admin/dashboard/question/View';
import TeacherSignup from '../Link/teacher/TeacherSignup';
import Login from '../Link/teacher/Login';
import Logout from '../Link/Logout';
import PendingTeacher from '../Link/admin/dashboard/teacher/PendingTeacher';
import TotalTeacher from '../Link/admin/dashboard/teacher/TotalTeacher';

 const ExamRouter = ()=>{

    return(
        <div>
            
        <BrowserRouter>
            <Routes> 
                <Route path='/' element={<ExamNavBar/>}>
                    <Route index element={<Home/>} />
                    <Route path='/teacher' element={<Teacher/>}/>
                    <Route path='/teachersignup' element={<TeacherSignup/>}/>  
                    <Route path='/student' element={<Student/>}/>
                    <Route path='/admin' element={<Admin/>} /> 
                    <Route path='/aboutus' element={<AboutUs/>}/>
                    <Route path='/contactus' element={<ContactUs/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='/pendingTeacher' element={<PendingTeacher/>}/>
                    <Route path='/totalteacher' element={<TotalTeacher/>}/>
                </Route> 

                <Route path='/' element={<DashboardNavBar/>}>
                    <Route path='/dashboard' index element={<Dashboard/>} />
                    <Route path='/teacher1' element={<Teacher1/>}>
                        {/* <Route path='pendingTeacher' element={<PendingTeacher/>}/> */}
                    </Route>
                    <Route path='/student1' element={<Student1/>}/>
                    <Route path='/course' element={<Course/>}>
                        <Route path='addCourse' element={<AddCourse/>}/>
                        <Route path='viewCourse' element={<ViewCourse/>}/>
                        <Route path='edit/:id/:cn:/cq:/cm' element={<EditCourse/>}/>
                    </Route>
                    <Route path='/question1' element={<Questions/>}>
                        <Route path='addQuestion' element={<AddQuestions/>}/>
                        <Route path='view' element={<View/>}/>
                        <Route path='viewquestion' element={<ViewQuestion/>}/>
                        <Route path='edit/:id/:qu/:ma/:o1/:o2/:o3/:o4/:ans' element={<EditQuestion/>}/>
                    </Route>  
                </Route>
                
            </Routes>
        </BrowserRouter>
        
        </div>
        
    )
}
export default ExamRouter;