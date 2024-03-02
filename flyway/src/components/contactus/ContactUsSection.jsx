import { useState } from "react";
import '../login/LoginSection.css'

const ContactUsSection = ()=>{

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        window.alert('Submitted successfully');
      }
     
    
      return (
        <div className="blur-background">
            <div className="container" style={{marginTop:'200px'}}>
                <div className="row justify-content-center ">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h1>Contact Us</h1>
                            </div>
                            <div className="card-body">

                                <form onSubmit={handleSubmit}>

                                    <div className="form-group">
                                        <label htmlFor="name" >Name:</label>
                                        <input type="text" className="form-control" id="name" name="name" value={formData.name}
                                            onChange={handleChange} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" className="form-control" id="email" name="email" value={formData.email}
                                            onChange={handleChange} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message:</label>
                                        <textarea className="form-control" id="message" name="message" value={formData.message}
                                            onChange={handleChange} rows="4" required />
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary rounded-3 mt-4">Submit</button>
                                    </div>
                                </form>
                                

                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>



        // <div className="mt-3" style={{marginLeft:'500px',marginRight:'500px',paddingTop:'200px'}}>
        //   <h2 style={{textAlign:'center', color:'midnightblue',fontWeight:'bold'}}>Contact Us</h2>
        //   <form onSubmit={handleSubmit}>
        //     <div className="form-group">
        //       <label htmlFor="name" >Name:</label>
        //       <input
        //         type="text"
        //         className="form-control"
        //         id="name"
        //         name="name"
        //         value={formData.name}
        //         onChange={handleChange}
        //         required
        //       />
        //     </div>
        //     <div className="form-group">
        //       <label htmlFor="email">Email:</label>
        //       <input
        //         type="email"
        //         className="form-control"
        //         id="email"
        //         name="email"
        //         value={formData.email}
        //         onChange={handleChange}
        //         required
        //       />
        //     </div>
        //     <div className="form-group">
        //       <label htmlFor="message">Message:</label>
        //       <textarea
        //         className="form-control"
        //         id="message"
        //         name="message"
        //         value={formData.message}
        //         onChange={handleChange}
        //         rows="4"
        //         required
        //       ></textarea>
        //     </div>
        //     <div className="text-center">
        //         <button type="submit" className="btn btn-primary rounded-3 mt-4">Submit</button>
        //     </div>
        //   </form>
        // </div>
      );

}

export default ContactUsSection;