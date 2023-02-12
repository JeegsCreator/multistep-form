import '../styles/billing-option.scss'

const BillingOption = ({
    billing,
    setBilling
}) => {
    

    const onclick = (event) => {
        event.preventDefault()
        switch (billing) {
            case "monthly":
                setBilling("yearly")
                break;
                
            case "yearly":
                setBilling("monthly")
                break;
        }
    }
    return (
        <div className="billing-option">
            <p  className={`billing-option__text ${(billing === "monthly") ? 'active' : ''}`} >Monthly</p>
            <button 
                onClick={onclick}
                className={`billing-option__button ${billing}`}>
                <div  className="billing-option__button__circle"/>
            </button>
            <p  className={`billing-option__text ${(billing === "yearly") ? 'active' : ''}`} >Yearly</p>
        </div>
    );
}

export default BillingOption;