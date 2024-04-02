import React from 'react'

export default function Alert(props) {
    const alertCapitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    
  return (
    // for true condition
    // if null don't show
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
      <strong>{alertCapitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}
