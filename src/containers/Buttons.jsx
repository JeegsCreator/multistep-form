import '../styles/buttons.scss'
import Button from '../components/Button';

const Buttons = ({
    action,
    children,
    setActualStep,
    actualStep,
    setSummarizing,
}) => {

    function validateForm() {
        // This function deals with validation of the form fields
        let valid = true;
        let stepSections = document.getElementsByClassName("step-section");
        let inputs = stepSections[actualStep].getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
        switch (actualStep) {
            case 0:
                for (let i = 0; i < inputs.length; i++) {
                    // If a field is empty...
                    inputs[i].classList.remove('error')
                    if (inputs[i].value == "") {
                      inputs[i].parentElement.children[0].children[1].classList.add('error')
                      inputs[i].classList.add('error')
                      // and set the current valid status to false:
                      valid = false;
                    }
                }
            break;
        
            case 1:
                const checkInputs = [].slice.call(inputs);
                checkInputs.forEach(check => {
                    check.classList.remove('error')
                })
                if(!checkInputs.some(check => check.checked === true)){
                    // console.log(inputs)
                    checkInputs.forEach(checkI => {
                        checkI.classList.add('error')
                    })
                    valid = false;
                }
            break;

            case 2:
                setSummarizing(prev => !prev)
            break;
        }
        // If the valid status is true, mark the step as finished and valid:
        // if (valid) {
        //   document.getElementsByClassName("step")[currentTab].className += " finish";
        // }
        return valid; // return the valid status
    }


    return (
        <section className="step-buttons-container">
            <Button 
                visible={(actualStep === 0 || actualStep === 4) ? 'invisible' : '' }
                action={() => {
                    setActualStep((actualStep) => actualStep-1) 
                }}
                secondary
            >go back</Button>
            <Button 
                visible={(actualStep === 4) ? 'invisible' : '' }
                action={() => {
                    if(validateForm()){
                        setActualStep((actualStep) => actualStep+1)
                    }
                }}
            >{(actualStep === 3) ? "confirm" : "next step"}</Button>
        </section>
    );
}

export default Buttons;