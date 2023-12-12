import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
/* https://www.npmjs.com/package/react-textfit
    npm install react-textfit --save  
    (if an error message is displayed during installation then try: 
    npm install react-textfit --force) */
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit className="screen" max={70}  mode="single">{calc.num ? calc.num : calc.res}</Textfit>
  )
}

export default Screen