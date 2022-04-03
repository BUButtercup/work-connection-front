import React from 'react'
import { CloseButton } from 'react-bootstrap'
import './style.css'

const InputObj = (props) => {
    console.log('props', props)
    return (
        <div key={props.title} value={props.title} className="d-flex justify-content-center align-items-center job-box">
      
                {props.title} {props.speak===true ? "S" : null}{props.read===true ? " | R" : null}{props.write===true ? " | W" : null}            
          
            
            <CloseButton value={props.title} aria-label="Hide" onClick={props.removeItem} />
        </div>
    )
}

export default InputObj