import { useState } from "react";
import './contact.css';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'

const ContactUs = ()=>{

    const [Data, setData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const [message,setMessage] = useState('')
      const [show,setShow] = useState(true)

      const CONTACTUS_API_URL = "http://localhost:8080/api/contactus"

      const contactadd = (serverUrl)=>{
        fetch(serverUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                name:Data.name,
                email:Data.email,
                message:Data.message
            })
        })
            .then(response=>{
                if(response.ok) return response.json()
                else if(response.status=="404") return response.json()
                else throw Error(`Server Error ${response.status}`)
            })
            .then(data=>setMessage(data.message))
            .catch(err=>console.error(err))
      }
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
      };
    
      const handleSubmit =  (e) => {
        e.preventDefault();
        contactadd(CONTACTUS_API_URL+"/add-contactus");
        alert('Submitted successfully');
      }

    return(
        <div className="body2">
            <div className='body1'>
                <form onSubmit={handleSubmit}>
                    <h1 className="font1">Contact Us</h1>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control mb-4 w-75 mx-auto text-center rounded-pill" id="name" name="name" value={Data.name} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control mb-4 w-75 mx-auto text-center rounded-pill" id="email" name="email" value={Data.email} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea className="form-control mb-4 w-75 mx-auto text-center" id="message" name="message" value={Data.message} onChange={handleChange} rows="4" required />
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary mb-3 w-25 mx-auto text-center rounded-pill">Submit</button>
                        </div>
                                    
                    </form>
                </div>

            {message &&
                <div>
                    <ToastContainer position="middle-center">
                        <Toast show={show} onClose={()=>setShow(!show)}>
                            <Toast.Header>
                                <strong>Info</strong>
                            </Toast.Header>
                            <Toast.Body>
                                {message}
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
            }
        </div>
        
    )
}
export default ContactUs;