import { createContext, useState } from "react"

/* https://react.dev/reference/react/createContext#provider
  https://legacy.reactjs.org/docs/context.html */
export const CalcContext = createContext()
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });

  const providerValue = {
    calc, setCalc
  }

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider