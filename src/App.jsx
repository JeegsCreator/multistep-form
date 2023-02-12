import Steps from './containers/Steps'
import Content from './containers/Content'
import './styles/app.scss'
import { useState } from 'react'

function App() {

  const [actualStep, setActualStep] = useState(0)

  return (
    <div className="body">
      <Steps actualStep={actualStep} setActualStep={setActualStep}/>
      <Content setActualStep={setActualStep} actualStep={actualStep}/>
    </div>
  )
}

export default App
