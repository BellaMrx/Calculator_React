/* buttonBox component (is the lower, child element in the wrapper)
  - container for all calculator buttons */
const ButtonBox = ({ children }) => {
    return (
      <div className="buttonBox">{children}</div>
      /* the styling of the ButtonBox component is done in index.css .buttonBox (className) */ 
    )
  }
  
  export default ButtonBox

