import { createContext, useState } from "react"

/* https://react.dev/reference/react/createContext#provider
  https://legacy.reactjs.org/docs/context.html */
export const CalculatorContext = createContext()
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: "Hello World",    // 0
  });

  const providerValue = {
    calc, setCalc
  }

  return (
    <CalculatorContext.Provider value={providerValue}>
      {children}
    </CalculatorContext.Provider>
  )
}

export default CalcProvider
/* import into App.js */