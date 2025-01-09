import React from 'react'

function Button({children, version, type, isDisabled}) {
  return (
   <button 
     type={type} 
     disabled={isDisabled} 
     className={`btn ${version ? `btn-${version}` : 'btn-primary'}`}
   >
    {children}
   </button>
  )
}

export default Button;
