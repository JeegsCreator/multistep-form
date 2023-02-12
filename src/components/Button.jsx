const Button = ({
    action,
    children,
    visible,
    secondary
}) => {
    return (
        <button 
            onClick={action}
            className={`step-buttons-container__button ${secondary ? 'secondary' : ''} ${visible}`}
        >{children}</button>
    );
}

export default Button;