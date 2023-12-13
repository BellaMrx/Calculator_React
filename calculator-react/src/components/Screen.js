/* screen of the calculator to display the input/result */
import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import { Textfit } from 'react-textfit';
/* https://www.npmjs.com/package/react-textfit
    npm install react-textfit --save  
    (if an error message is displayed during installation then try: 
    npm install react-textfit --force) */
/* react-textfit automatically adjusts the size of the text output 
   on the screen - 9.9 (displayed larger) or 9.9999999999999999999999 (displayed smaller) */ 
const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit className="screen" max={70}  mode="single">{calc.num ? calc.num : calc.res}</Textfit>
  )
}

export default Screen