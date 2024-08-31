import { useState } from "react";
import AdultSection from "./data/adult/AdultSection";
import AdultComponent from "./AdultComponent";

const Adult = ({msg})=>{

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        
            <h6>Name: {msg}</h6>
        
        </form>
        
        </>
    )

}
export default Adult;
