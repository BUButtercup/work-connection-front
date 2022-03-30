import React from 'react'
import { CloseButton } from 'react-bootstrap'

const InputObj = (props) => {
    return (
        <div key={props.title} value={props.title} className="d-flex justify-content-center align-items-center job-box">
            {props.title}
            <CloseButton value={props.title} variant="white" aria-label="Hide" onClick={props.removeItem} />
        </div>
    )
}

export default InputObj