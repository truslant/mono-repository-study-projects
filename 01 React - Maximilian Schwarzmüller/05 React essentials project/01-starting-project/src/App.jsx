import { useState } from "react"

import Header from "../components/Header"
import UserInputs from "../components/UserInputs"
import Results from "../components/Results"


const initalState = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}



function App() {

  const [inputs, setInputs] = useState(initalState)

  return (
    <>
      <Header />
      <UserInputs inputs={inputs} setInputs={setInputs} />
      <Results inputs={inputs} />
    </>
  )
}

export default App
