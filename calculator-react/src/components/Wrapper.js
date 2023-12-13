/* the wrapper component is the main container for the 
  entire application, this is where the centering is done */
const Wrapper = ({ children }) => {
    return (
      <div className="wrapper">{children}</div>
    )
  }
  
  export default Wrapper