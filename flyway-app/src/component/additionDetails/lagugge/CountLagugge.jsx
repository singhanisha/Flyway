import { useReducer } from "react"

const Count = (state,action)=>{

    switch(action.type){
        case "INCREASE":
            return{...state,count:state.count+1}
        case "DECREASE":
            return{...state,count:state.count-1}
        default:
            throw Error("Invalid action: ${action.type}")
    }
}

const CountLagugge = ()=>{

    const [state,dispatch] = useReducer(Count,{count:0})

    const handleDecrement = ()=>{
        if(state.count > 0){
        dispatch({type:"DECREASE"})}
    }
    const handleIncrement = ()=>{
        dispatch({type:"INCREASE"})
    }
    return (
        <div className="border border-2 rounded-2" style={{width:"74px"}}>
            <button className="me-2 border-end border-top border-bottom border-light" onClick={handleDecrement}>-</button>
            {state.count}  
            <button className="ms-2 border-end border-top border-bottom border-light" onClick={handleIncrement}>+</button>
        </div> 
    )
    
}
export default CountLagugge;