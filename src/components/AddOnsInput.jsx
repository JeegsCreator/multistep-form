import '../styles/addons-input.scss'
import Checkmark from '../assets/images/Checkmark';

const AddOnsInput = ({
    idName,
    price,
    title,
    description,
    billing,
    setAddons,
}) => {

    const onchange = (event) => {
        if(event.target.checked){
            setAddons(prevAddons => {
                prevAddons.push({
                    title,
                    price
                })

                return prevAddons
            })
        } else {
            setAddons(prevAddons => {
                const i = prevAddons.findIndex(ao =>  ao.title === title)
                prevAddons.splice(i, 1)
                return prevAddons
            })
        }
    }

    return (
        <div className="add-ons">
            <input 
                className="add-ons__input" 
                type="checkbox" 
                id={idName}
                onChange={onchange}
            />
            <label htmlFor={idName} className="add-ons__label">
                <div className="add-ons__label__checkbox">
                    <span className="add-ons__label__checkbox__span">
                        <Checkmark />
                    </span>
                </div>
                <div className="add-ons__label__info">
                    <p className="add-ons__label__info__title">{title}</p>
                    <p className="add-ons__label__info__description">{description}</p>
                </div>
                <p className="add-ons__label__price">+${price}{(billing === "monthly") ? "/mo" : "0/yr"}</p>
            </label>
        </div>
    );
}

export default AddOnsInput;