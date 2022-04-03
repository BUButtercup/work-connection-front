import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

const Duration = (props) => {
    const navigate = useNavigate();
    // const durBtns = document. querySelectorAll('.dur-btn');
    // durBtns.forEach(btn=>{
    //     btn.addEventListener('mouseover', 
    //     )
    // })



    return (
        <div className="d-flex flex-column align-items-center question">
            <h2 className="mb-4 text-center">What duration of job are you looking for?</h2>
            <Button className="mb-2 d-flex align-items-center dur-btn" variant="primary" onMouseDown={props.handleClick}><FontAwesomeIcon className="check me-3" icon={faSquareCheck} />Short-term</Button>
            <Button className="mb-2 d-flex align-items-center dur-btn" variant="primary" onMouseDown={props.handleClick}><FontAwesomeIcon className="check me-3" icon={faSquareCheck} />Mid-term</Button>
            <Button className="mb-2 d-flex align-items-center dur-btn" variant="primary" onMouseDown={props.handleClick}><FontAwesomeIcon className="check me-3" icon={faSquareCheck} />Long-Term</Button>

            <FontAwesomeIcon icon="fa-solid fa-square-check fa-lg" />

        </div>
    )
}

export default Duration