/* button component makes the button functional */
import { useContext } from "react";
import { CalculatorContext } from '../context/CalcAppContext'

/* gets the class of the operators (+-x/=), 
  which are used in index.css .equals .operators  */
const getClassName = btn => {
  const className = {
    '=': 'equals',
    'x': 'operators',
    '-': 'operators',
    '+': 'operators',
    '/': 'operators',
  }
  return className[btn]
}

/* button functions */
const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalculatorContext);

  // comma button is clicked
  const commaClickButton = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    });
  }
  // reset (C) button is clicked
  const resetClickButton = () => {
    setCalc({ sign: '', num: 0, res: 0 })
  }
  // a number is clicked
  const numberClickButton = () => {
    const numberString = value.toString()

    let numberValue;
    if(numberString === '0' && calc.num === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }
  // an operator (+-x/) is clicked
  const signClickButton = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }
  // the operator equals (=) is clicked
  const equalsClickButton = () => {
    if(calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          'x': (a, b) => a * b,
          '/': (a, b) => a / b,
        }
        return result[sign](a, b);
      }
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0
      })
    }
  }
  // percentage button (%) is clicked
  const persentClickButton = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: ''
    })
  }
  // invert button (+-) is clicked
  const invertClickButton = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ''
    })
  }

/* all button function in handleButtonClick event - 
  results function is called up when the respective button is clicked */
  const handleButtonClick = () => {
    
    const results = {
      '.': commaClickButton,
      'C': resetClickButton,
      '/': signClickButton,
      'x': signClickButton,
      '-': signClickButton,
      '+': signClickButton,
      '=': equalsClickButton,
      '%': persentClickButton,
      '+-': invertClickButton
    }
    if(results[value]) {
      return results[value]()
    } else {
      // returns the number that was clicked
      return numberClickButton()
    }
  }

  return (
    <button onClick={handleButtonClick} className={`${getClassName(value)} button`}>{value}</button> 
    // onClick={handleButtonClick} calls the handleButtonClick event 
    // ${getClassName(value)} button` calls the function getClassName with the respective value 
    /* the styling of the Button component is done in index.css .button (className) */ 
  )
}

export default Button
/* import into App.js */

