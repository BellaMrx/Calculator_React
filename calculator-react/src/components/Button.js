/* button component makes the button functional */
import { useContext } from "react";
import { CalcContext } from '../context/CalcContext'

/* function creates the class names for the operators (+-x/=) 
  to be used in them in index.css .equals .opt  */
const getStyleName = btn => {
  const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
  }
  return className[btn]
}

/* button functions */
const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  // User click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    });
  }
  // User click C
  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0 })
  }
  // User click number
  const handleClickButton = () => {
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
  // User click operation
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }
  // User click equals
  const equalsClick = () => {
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
  // User click persen
  const persenClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: ''
    })
  }
  // User click invert button
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ''
    })
  }

/* all button function in handleBtnClick event - 
  results function is called up when the respective button is pressed */
  const handleBtnClick = () => {
    
    const results = {
      '.': commaClick,
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
      '%': persenClick,
      '+-': invertClick
    }
    if(results[value]) {
      return results[value]()
    } else {
      // calls the number the user has pressed
      return handleClickButton()
    }
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button> 
    // onClick={handleBtnClick} calls the handleBtnClick event 
    // ${getStyleName(value)} button` calls the function getStyleName with the respective value 
    /* the styling of the Button component is done in index.css .button (className) */ 
  )
}

export default Button

