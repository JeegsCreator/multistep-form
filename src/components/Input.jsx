import '../styles/input.scss'

const Input = ({
    name,
    placeholder,
    label,
    type
}) => {
    return (
        <div className='input-container'>
            <label htmlFor={name} className="input-container">
                <div className='input-container__info'>
                    <p className="input-container__info__label">{label}</p>
                    <p className={`input-container__info__error`}>This field is required</p>
                </div>
                <input  className={`input-container__input`} type={type} name={name} placeholder={placeholder} />
            </label>
        </div>
    );
}

export default Input;