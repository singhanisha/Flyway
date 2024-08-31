import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FlightNavBar from './FlightNavBar';
import Home from '../components/Home';
import LoginSection from '../components/login/LoginSection';
import SignUpSection from '../components/signup/SignUpSection';
import AboutUsSection from '../components/aboutus/AboutUsSection';
import ContactUsSection from '../components/contactus/ContactUsSection';
import PageNotFound from '../components/PageNotFound';
import ViewDetails from '../components/home/ViewDetails';
import TravellerDetails from '../components/personalDetails/TravellerDetails';
import UpiSection from '../components/payment/UpiSection';
import NetBanking from '../components/payment/NetBanking';
import Wallet from '../components/payment/Wallet';
import Debit from '../components/payment/Debit';
import PaymentMethod from '../components/payment/PaymentMethod';
import AirlinesDesc from '../components/airlines/AirlinesDesc';
import AdminSection from '../components/admin/AdminSection';
import DatabaseNavBar from './DatabaseNavBar';
import Airline from '../components/database/airline/Airline';
import Aparture from '../components/database/aparture/Aparture';
import Departure from '../components/database/Departure/Departure';
import AirlinesInfo from '../components/database/AirlinesInfo/AirlinesInfo';
import Travellerdetail from '../components/database/travellerdetail/TravellerDetail';
import AirlinesInfoView from '../components/database/AirlinesInfo/AirlinesInfoView';
import AirlinesInfoAdd from '../components/database/AirlinesInfo/AirlinesInfoAdd';
import AirlinesInfoEdit from '../components/database/AirlinesInfo/AirlinesInfoEdit';
import TravellerDetailView from '../components/database/travellerdetail/TravellerDetailView';
import AdultSection from '../components/personalDetails/data/adult/AdultSection';
import Button from '../components/personalDetails/Button';
import SignUp from '../components/database/signup/SignUp';
import SignUPView from '../components/database/signup/SignUPView';
import SignUpEdit from '../components/database/signup/SignUpEdit';
import ChildrenSection from '../components/personalDetails/data/children/ChildrenSection';
import ChildButton from '../components/personalDetails/ChildButton';
import Login from '../components/database/login/Login';
import LoginView from '../components/database/login/LoginView';
import Travel from '../components/personalDetails/Travel';
import Dashboard from '../components/database/Dashboard';
import Contact from '../components/database/contact/Contact';
import ContactView from '../components/database/contact/ContactView';
import ApartureAdd from '../components/database/aparture/ApartureAdd';
import FlightSearch from '../components/home/SearchFlight';
import AdultView from '../components/database/travellerdetail/AdultView';


const FlightRouter = ()=>{

    

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FlightNavBar/>}>
                    <Route index element={<Home/>}>
                        {/* <Route path='view' element={<FlightSearch/>}/> */}
                    </Route>
                        {/* <Route path='details/:aid' element={<AirlineDetails/>}  />  */}
                    
                    <Route path='/login' element={<LoginSection/>} />
                    <Route path='/admin' element={<AdminSection/>} />
                    <Route path='/signup' element={<SignUpSection/>} />
                    <Route path='/aboutus' element={<AboutUsSection/>} />
                    <Route path='/contactus' element={<ContactUsSection/>} />
                    <Route path='/viewdetail/:fid' element={<ViewDetails/>} />
                    <Route path='/traveller-details' element={<Button/>}>
                    {/* <Route path='add1' element={<AdultSection/>}/>
                    <Route path='/button' element={<Button/>}>
                        <Route path='add1' element={<AdultSection/>}/>
                    </Route>
                    <Route path='/childbutton' element={<ChildButton/>}>
                        <Route path='add2' element={<ChildrenSection/>}/> */}
                    </Route>
                    <Route path='/airlines-desc/:aid' element={<AirlinesDesc/>}/>


                    
                        
                    
                   


                    <Route path='/payment-methods' element={<PaymentMethod/>} >
                    <Route path='upi' element={<UpiSection/>} />
                    <Route path='netbanking' element={<NetBanking/>} />
                    <Route path='debit' element={<Debit/>} />
                    <Route path='wallet' element={<Wallet/>} />
                    </Route>

                    





                    <Route path='*' element={<PageNotFound/>} />   
                </Route>

                <Route path='/' element={<DatabaseNavBar/>}>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/airline' element={<Airline/>}/>
                    <Route path='/aparture' element={<Aparture/>}>
                        <Route path='add' element={<ApartureAdd/>}/>
                    </Route>
                    <Route path='/departure' element={<Departure/>}/>
                    <Route path='/airlinesinfo' element={<AirlinesInfo/>}>
                        <Route path="view" element={<AirlinesInfoView/>}/>
                        <Route path="add" element={<AirlinesInfoAdd/>}/>
                        <Route path="edit/:airlines_Id/:nm/:ra/:io" element={<AirlinesInfoEdit/>}/>
                    </Route>
                    <Route path='/travellerdetail' element={<Travellerdetail/>}>
                        <Route path='view' element={<TravellerDetailView/>}/>
                    </Route>
                    <Route path='/signup1' element={<SignUp/>}>
                        <Route path='view' element={<SignUPView/>}/>
                        <Route path="edit/:id/:un/:em/:pa" element={<SignUpEdit/>}/>
                    </Route>
                    <Route path='/login1' element={<Login/>}>
                        <Route path='view' element={<LoginView/>}/>
                    </Route>
                    <Route path='/contact' element={<Contact/>}>
                        <Route path='view' element={<ContactView/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default FlightRouter;