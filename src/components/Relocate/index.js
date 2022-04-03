import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

const Relocate = (props) => {
  return (
    <div className="d-flex flex-column align-items-center question">
      <h2 className="mb-4 text-center">Are you willing to relocate?</h2>
      <Button className="mb-2 d-flex align-items-center dur-btn" variant="primary" onClick={props.handleClick} ><FontAwesomeIcon className="check me-5" icon={faSquareCheck} />Yes</Button>
      <Button className="mb-2 d-flex align-items-center dur-btn" variant="primary" onClick={props.handleClick}><FontAwesomeIcon className="check me-5" icon={faSquareCheck} />No</Button>
    </div>
  )
}

export default Relocate