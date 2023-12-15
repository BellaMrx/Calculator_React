/* the screen component (is the upper, child element in the wrapper) 
  is for displaying the input/result  */
import { useContext } from "react"
import { CalculatorContext } from "../context/CalcAppContext"
import { Textfit } from 'react-textfit';
/* https://www.npmjs.com/package/react-textfit
    npm install react-textfit --save  
    (if an error message is displayed during installation then try: 
    npm install react-textfit --force) */ 
const Screen = () => {
  const { calc } = useContext(CalculatorContext);

  return (
    /* react-textfit automatically adjusts the size of the text output 
   on the screen - 9.9 (displayed larger) or 9.9999999999999999999999 (displayed smaller) */
    <Textfit className="screen" max={70}  mode="single">{calc.num ? calc.num : calc.res && calc.sign ? calc.sign : calc.res}</Textfit>
    /* the styling of the Screen component is done in index.css .screen (className) */
  )
}

export default Screen
/* import into App.js */
 