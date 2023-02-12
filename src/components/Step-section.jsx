const StepSection = ({
    title,
    subtitle,
    children,
    active
}) => {
    return (
        <section className={`step-section ${active && 'active'}`}>
            <div className="step-section__title-container">
                <h1 className="step-section__title-container__title">{title}</h1>
                <p className="step-section__title-container__subtitle">{subtitle}</p>
            </div>
            <div className="step-section__form">
                {children}
            </div>
        </section>
    );
}

export default StepSection;