import { useState } from "react"

const PaymentModes = ()=>{
    const [payment,setPayment] = useState({
        option:''
    })
    
    const handleOptionChange = (e)=>{
        setPayment({...payment,option:e.target.value})
    }

    const [isSubmitted,setIsSubmitted] = useState(false)
     const handleSubmit = (e)=>{
        e.preventDefault()
        setIsSubmitted(true)
    }

    return(
        <>
        {!isSubmitted &&
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Modes Of Payment</h4>
                <h6>Choose any one mode of payment</h6>
                <div>
                    <input  type="radio" id="g1" name="option" value="upi" checked={payment.option=="upi"} onChange={handleOptionChange} required></input>
                    <label  htmlFor="g1">UPI</label><br/>
                    <input  type="radio" id="g2" name="option" value="debit_credit" checked={payment.option=="debit_credit"} onChange={handleOptionChange} required></input>
                    <label  htmlFor="g2">Debit Credit</label><br/>
                    <input  type="radio" id="g3" name="option" value="net_banking" checked={payment.option=="net_banking"} onChange={handleOptionChange} required></input>
                    <label  htmlFor="g3">Net Banking</label><br/>
                    <input  type="radio" id="g4" name="option" value="wallets" checked={payment.option=="wallets"} onChange={handleOptionChange} required></input>
                    <label  htmlFor="g4">Wallets</label>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Continue</button>
                </div>
            </form>
        </div>}

        {isSubmitted &&
        <div>
            <h5>You selected <b>{payment.option}</b> </h5>
        </div>

        }


        </>
    )

}
export default PaymentModes;
