import { useState } from 'react'
import StepSection from "../components/Step-section";
import PlanButton from '../components/PlanButton'
import Input from '../components/Input'

import '../styles/form.scss'
import BillingOption from "../components/BillingOption";
import AddOnsInput from '../components/AddOnsInput';
import Finishing from '../components/Finishing';
import ThankYouIcon from '../assets/images/ThankYouIcon';

const Form = ({
  id,
  setActualStep,
  actualStep,
  summarizing,
}) => {
  let [billing, setBilling] = useState("monthly")
  let [plan, setPlan] = useState('')
  let [addons, setAddons] = useState([])

  return (
    <form className="form" id={id}>
      <StepSection
        active={(actualStep === 0) ? true : false}
        title="personal info"
        subtitle="please provide your name, email address, and phone number."
      >
        <Input name="name" placeholder="e.g Stephen King" label="name"/>
        <Input name="mail" type="mail" placeholder="e.g stephenking@lorem.com" label="email address"/>
        <Input name="phone" type="tel" placeholder="e.g +1 234 567 890" label="phone number"/>
      </StepSection>

      <StepSection
        active={(actualStep === 1) ? true : false}
        title="Select Plan"
        subtitle="You have the option of monthly or yearly billing."
      >
        <PlanButton billing={billing} setPlan={setPlan} />
        <BillingOption billing={billing} setBilling={setBilling}/>
      </StepSection>
      
      <StepSection
        active={(actualStep === 2) ? true : false}
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      >
        <AddOnsInput 
          billing={billing}
          idName="services"
          price={1}
          title="Online services"
          description="Access to multiplayer games"
          setAddons={setAddons}
        />
        <AddOnsInput 
          billing={billing}
          idName="storage"
          price={2}
          title="Larger storage"
          description="Extra 1TB of cloud save"
          setAddons={setAddons}
        />
        <AddOnsInput 
          billing={billing}
          idName="profile"
          price={2}
          title="Customizable profile"
          description="Custom theme on your profile"
          setAddons={setAddons}
        />
      </StepSection>

      <StepSection
        active={(actualStep === 3) ? true : false}
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      >
        <Finishing 
          billing={billing}
          plan={plan}
          addons={addons}
          setActualStep={setActualStep}
          summarizing={summarizing}
        />
      </StepSection>

      <StepSection
        active={(actualStep === 4) ? true : false}
      >
        <div className="thanks">
            <ThankYouIcon />
            <h1 className="thanks__title">Thank you!</h1>
            <p className="thanks__description">
              Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
            </p>
        </div>
      </StepSection>
    </form>
  );
};

export default Form;
