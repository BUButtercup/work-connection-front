import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Duration = (props) => {
    const navigate = useNavigate();



    return (
        <div className="d-flex flex-column align-items-center question">
            <h2 className="mb-4 text-center">What duration of job are you looking for?</h2>
            <Button className="mb-2" variant="primary" onClick={props.handleClick}>Short-term</Button>
            <Button className="mb-2" variant="primary" onClick={props.handleClick}>Mid-term</Button>
            <Button className="mb-2" variant="primary" onClick={props.handleClick}>Long-Term</Button>
        </div>
    )
}

export default Duration