import { React, useState } from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import './style.css'

const WorkExp = (props) => {
    const [workHx, setWorkHx] = useState([])
    const jobArr = []

    const getInfo = e => {
        e.preventDefault();
        jobArr.push(document.getElementById('job-inpt').value)
        setWorkHx(jobArr)
        console.log('workHx', workHx)
    }

    return (
        <div className="d-flex flex-column align-items-center question">
            <h2 className="mb-4 text-center">Please add your work experience</h2>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Enter job"
                    aria-label="Enter job"
                    aria-describedby="basic-addon2"
                    id="job-inpt"
                />
                <Button className="border border-secondary" variant="outline-secondary" id="button-addon2" onClick={getInfo}>
                    Submit
                </Button>
            </InputGroup>
            {workHx.map(job=>{
               return <div classname="job-box">{job}</div>
            })}
            <Button className="mb-2" variant="primary" onClick={props.handleClick}>Next</Button>
        </div>

    )
}

export default WorkExp