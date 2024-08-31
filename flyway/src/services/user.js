import { myAxios } from "./helper";

export const adultInfo = (user)=>{
    
    return myAxios.post("/api/adults",user)
        .then((response)=>response.json())
};