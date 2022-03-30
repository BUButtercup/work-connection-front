import { React, useState } from 'react'
import { Form, InputGroup, Button, FormControl, CloseButton } from 'react-bootstrap'
import './style.css'

const WorkExp = (props) => {
    const [workHx, setWorkHx] = useState([])
    let jobArr = []

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
            console.log(workHx)
        }
    }

    const removeItem = e => {
        e.preventDefault();
        const selectedJob = e.target.value
        console.log('clickedjob', selectedJob);

        const newJobArr = workHx.filter(job => { return job !== selectedJob })
        console.log('newarr', newJobArr);
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
            <div className="col-9 d-flex flex-wrap job-cont" >
                {workHx ? workHx.map(job => {
                    return <div key={job} value={job} className="d-flex justify-content-center align-items-center job-box">
                        {job}
                        <CloseButton value={job} variant="white" aria-label="Hide" onClick={removeItem} />
                    </div>
                }) : null}
            </div>
            <Button className="mb-2" variant="primary" onClick={props.handleClick}>Next</Button>
        </div>

    )
}

export default WorkExp