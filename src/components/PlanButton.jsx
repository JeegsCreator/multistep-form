import ArcadeIcon from '../assets/images/ArcadeIcon'
import AdvancedIcon from '../assets/images/AdvancedIcon'
import ProIcon from '../assets/images/ProIcon'
import '../styles/plan-button.scss'

const PlanButton = ({
    setPlan,
    billing
}) => {

    const onchange = (event) => {
        setPlan(event.target.value)
    }
    return (
        <div className="plan-button__box">
            <div>
                <input 
                    onChange={onchange}
                    className='plan-button__box__input'
                    type="radio" 
                    name="plan" 
                    id="arcade" 
                    value={"arcade"}
                />
                <p className="plan-button__box__error">select a option plan</p>
                <label htmlFor="arcade" className='plan-button__box__button'>
                    <ArcadeIcon />
                    <div className="plan-button__box__button__info">
                        <p className="plan-button__box__button__info__title">arcade</p>
                        <p className="plan-button__box__button__info__price">
                            $9{(billing === "monthly") ? "/mo" : "0/yr"}
                        </p>
                        {(billing === "yearly") && <p className="plan-button__box__button__info__free">2 months free</p>}
                    </div>
                </label>
            </div>
            <div>
                <input 
                    onChange={onchange}
                    className='plan-button__box__input'
                    type="radio" 
                    name="plan" 
                    id="advanced" 
                    value={"advanced"}
                />
                <label htmlFor="advanced" className='plan-button__box__button'>
                    <AdvancedIcon />
                    <div className="plan-button__box__button__info">
                        <p className="plan-button__box__button__info__title">advanced</p>
                        <p className="plan-button__box__button__info__price">
                            $12{(billing === "monthly") ? "/mo" : "0/yr"}
                        </p>
                        {(billing === "yearly") && <p className="plan-button__box__button__info__free">2 months free</p>}
                    </div>
                </label>
            </div>
            <div>
                <input 
                    onChange={onchange}
                    className='plan-button__box__input'
                    type="radio" 
                    name="plan" 
                    id="pro" 
                    value={"pro"}
                />
                <label htmlFor="pro" className='plan-button__box__button'>
                    <ProIcon />
                    <div className="plan-button__box__button__info">
                        <p className="plan-button__box__button__info__title">pro</p>
                        <p className="plan-button__box__button__info__price">
                            $15{(billing === "monthly") ? "/mo" : "0/yr"}
                        </p>
                        {(billing === "yearly") && <p className="plan-button__box__button__info__free">2 months free</p>}
                    </div>
                </label>
            </div>
        </div>
    );
}

export default PlanButton;