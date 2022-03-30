import { React, useEffect, useState } from 'react'
import { industries } from '../../assets/data/industries.js'
import { Form, Button } from 'react-bootstrap'
import InputObj from '../InputObj'

const Industries = (props) => {
    const [jobIndustries, setJobIndustries] = useState([])
    const [indSelect, setIndSelect] = useState([])

    useEffect(() => {
        setJobIndustries(industries)
    }, [])

    const handleChange = (e, val) => {
        e.preventDefault();
        if (indSelect !== []) {
            setIndSelect(arr => [...arr, val]);
        } else { 
            setIndSelect(val) 
        }
        console.log(val)
        document.querySelector('form').reset();
    }

    const removeInd = e => {
        e.preventDefault();
        const selectedInd = e.target.value
        const newIndArr = indSelect.filter(ind => { return ind !== selectedInd })
        setIndSelect(newIndArr)
    }

    return (
        <div className="d-flex flex-column align-items-center question">
            <h2 className="mb-4 text-center">What industry would you like to work in?</h2>
            <Form>
            <Form.Select aria-label="Select desired job industry" onChange={(e)=>handleChange(e, e.target.value)}>
                <option>Industries</option>
                {jobIndustries ? jobIndustries.map(ind=> {return <option key={ind.id} value={ind.name}>{ind.name}</option>}) : null}
            </Form.Select>
            </Form>
            <div className="col-9 d-flex flex-wrap job-cont" >
            {indSelect ? indSelect.map(ind => {
                    return (<InputObj title={ind} removeItem={removeInd}/>
            )}) : null}
            </div>
            <Button className="mb-2" variant="primary" onClick={props.handleClick}>Next</Button>
        </div>
    )
}

export default Industries