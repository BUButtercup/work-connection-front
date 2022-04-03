import { React, useState } from 'react'
import { Form, InputGroup, Button, FormControl, CloseButton } from 'react-bootstrap'
import './style.css'
import InputObj from '../InputObj'

const WorkExp = (props) => {
    const [workHx, setWorkHx] = useState([])

    const updateItems = (arr, el) => {
        if (arr !== []) {
            setWorkHx(arr => [...arr, el]);
        } else { setWorkHx(el) }
    }

    const getInfo = e => {
        e.preventDefault();
        let jobValue = document.getElementById('job-inpt').value
        if (jobValue === '') {
            alert('Please enter a job.')
            return
        } else {
            updateItems(workHx, jobValue)
            document.querySelector('form').reset();
        }
    }

    const removeJobItem = e => {
        e.preventDefault();
        const selectedJob = e.target.value
        const newJobArr = workHx.filter(job => { return job !== selectedJob })
        setWorkHx(newJobArr)
    }

    return (
        <div className="d-flex flex-column align-items-center question">
            <h2 className="mb-4 text-center">Please add your work experience</h2>
            <Form>
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
            </Form>
            <div className="col-9 col-md-6 d-flex flex-wrap job-cont" >
                {workHx ? workHx.map(job => {
                    return <InputObj title={job} removeItem={removeJobItem}/>
                }) : null}
            </div>

        </div>

    )
}

export default WorkExp