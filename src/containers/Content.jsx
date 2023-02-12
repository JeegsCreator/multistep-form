import Buttons from "../containers/Buttons";
import Form from "./Form";
import '../styles/content.scss'
import { useEffect, useState } from "react";

const Content = ({
    setActualStep,
    actualStep
}) => {
    const [summarizing, setSummarizing] = useState(true)
    return (
        <main className="content">
            <Form 
                id="form" 
                actualStep={actualStep}
                setActualStep={setActualStep}
                summarizing={summarizing}
            />
            <Buttons setActualStep={setActualStep} actualStep={actualStep} setSummarizing={setSummarizing}/>
        </main>
    );
}

export default Content;