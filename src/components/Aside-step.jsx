const Step = ({
    index, 
    children,
    isActual,
}) => {
    return (
        <div className={`steps__step`}>
            <button 
                className={`steps__step__point` + (isActual ? ' active' : '')}
            >
                <p>{index+1}</p>
            </button>
            <div className={`steps__step__title`}>
                <p className={`steps__step__title__number`}>step {index+1}</p>
                <p className={`steps__step__title__name`}>{children}</p>
            </div>
        </div>
    );
}

export default Step;