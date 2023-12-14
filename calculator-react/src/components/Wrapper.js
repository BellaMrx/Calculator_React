/* the wrapper component is the main container for the entire 
  application (for all child components), this is where the 
  centering takes place */
const Wrapper = ({ children }) => {
    return (
      <div className="wrapper">{children}</div>
      /* the styling of the Wrapper component is done in index.css .wrapper (className) */ 
    )
  }
  
  export default Wrapper
  /* import into App.js */
