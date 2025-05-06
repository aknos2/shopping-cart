function Button({
    color,
    backgroundColor,
    text,
    onClick,
    id = "",
    className = "",
    tabIndex = 0,
    disabled,
    display
  }) {
      const buttonStyle = {
          color: color,
          backgroundColor: backgroundColor,
          display: display
      }
  
      return (
          <button style={buttonStyle} 
          onClick={onClick} 
          id={id} 
          className={className} 
          tabIndex={tabIndex} 
          disabled={disabled}
          >
            
              {text}
          </button>
      )
  }
  
  export default Button;