import React from 'react'
import { Button } from 'react-bootstrap'

const Relocate = (props) => {
  return (
    <div className="d-flex flex-column align-items-center question">
      <h2 className="mb-4 text-center">Are you willing to relocate?</h2>
      <Button className="mb-2" variant="primary" onClick={props.handleClick}>Yes</Button>
      <Button className="mb-2" variant="primary" onClick={props.handleClick}>No</Button>
    </div>
  )
}

export default Relocate