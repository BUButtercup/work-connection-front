import { React, useState } from 'react'
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap'
import InputObj from '../InputObj'

const Languages = (props) => {
    const [langInput, setLangInput] = useState([])
    // const [chosenLang, setChosenLang] = useState({
    // })

    const updateLangs = (arr, el) => {
        console.log('chosenLang', el)
        if (el !== {}) {
            if (arr !== []) {
                setLangInput(arr => [...arr, el]);
            } else { setLangInput(el) }
        }
    }

    const handleCollectLangs = e => {
        e.preventDefault();
        const speakBox = document.getElementById('speak');
        const readBox = document.getElementById('read');
        const writeBox = document.getElementById('write');
        let langValue = document.getElementById('lang-inpt').value
        if (langValue === '') {
            alert('Please enter a language.')
            return
        } else {
            console.log('values', speakBox.value, readBox.value, writeBox.value, langValue)
            let chosenLang = {
                language: langValue,
                speak: speakBox.checked ? true : false,
                read:  readBox.checked ? true : false,
                write:  writeBox.checked ? true : false
            }
            updateLangs(langInput, chosenLang);
            chosenLang = {};
            document.querySelector('form').reset();
       
        }
    }

    // const getLang = e => {
    //     e.preventDefault();
    //     let langValue = document.getElementById('lang-inpt').value
    //     if (langValue === '') {
    //         alert('Please enter a language.')
    //         return
    //     } else {
    //         updateLangs(langInput, langValue)

    //     }
    // }

    const removeLangItem = e => {
        e.preventDefault();
        const selectedLang = e.target.value
        const newLangArr = langInput.filter(job => { return job.language !== selectedLang })
        setLangInput(newLangArr)
    }

    return (
        <div className="d-flex flex-column align-items-center question">
            <h2 className="mb-4 text-center">Please add all languages you know</h2>
            <Form className="d-flex flex-column justify-content-center align-items-center">
                <div className="m-4">
                    <Form.Check type='checkbox' name="Speak" id="speak" value={true} defaultValue={false} inline>
                        <Form.Check.Input type="checkbox" value={true} defaultValue={false}/>
                        <Form.Check.Label>Speak</Form.Check.Label>
                        {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                    </Form.Check>
                    <Form.Check type='checkbox' name="Read" id="read" value={true} defaultValue={false} inline>
                        <Form.Check.Input type="checkbox" value={true} defaultValue={false}/>
                        <Form.Check.Label>Read</Form.Check.Label>
                        {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                    </Form.Check>
                    <Form.Check type='checkbox' name="Write" id="write"  inline>
                        <Form.Check.Input value={true} defaultValue={false} type="checkbox"/>
                        <Form.Check.Label>Write</Form.Check.Label>
                        {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                    </Form.Check>
                </div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Enter language"
                        aria-label="Enter language"
                        aria-describedby="basic-addon2"
                        id="lang-inpt"
                        name="language"
                    />
                    <Button className="border border-secondary" variant="outline-secondary" id="button-addon2" onClick={handleCollectLangs}>
                        Submit
                    </Button>
                </InputGroup>

            </Form>
            <div className="col-9 col-md-6 d-flex flex-wrap job-cont" >
                {langInput ? langInput.map(lang => {
                    return <InputObj title={lang.language} removeItem={removeLangItem} speak={lang.speak===true ? true : false} read={lang.read===true ? true : false} write={lang.write===true ? true : false}/>
                }) : null}
            </div>
            <Button className="mb-2" variant="primary" onClick={props.handleClick}>Next</Button>
        </div>
    )

}

export default Languages