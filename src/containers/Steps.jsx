import Step from "../components/Aside-step";
import '../styles/steps.scss'

const Steps = ({
    actualStep,
    setActualStep,
}) => {

    const steps = [
        "your info",
        "select plan",
        "add-ons",
        "summary"
    ]
    return (
        <aside className='steps'>
            {steps.map((step, index) => {                console.log(((actualStep === 4) && (index === 4)))
                return <Step key={index} index={index} isActual={((index === actualStep) || ((actualStep === 4) && (index === 3)) ) ? true : false} setActualStep={setActualStep}>{step}</Step>
            })}
        </aside>
    );
}

export default Steps;