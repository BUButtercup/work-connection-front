import { React, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { Row, ButtonGroup, Button } from 'react-bootstrap'
import './style.css'
import Duration from '../../components/Duration'
import Relocate from '../../components/Relocate'
import WorkExp from '../../components/WorkExp'
import Industries from '../../components/Industries'
import Languages from '../../components/Languages'
import Register1 from '../../components/Register1'
import Register2 from '../../components/Register2'
import RegComp from '../../components/RegComp'


const Register = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0)
    // const [numBtn, setNumBtn] = useState(false)

    useEffect(() => {
        setProgress(0)
    }, [])
    

    // const checkProgress = e => {
    //     e.preventDefault();
    //     console.log('progress: ',progress)
    //     if (progress===0){
    //         setNumBtn(false)
    //     } else {
    //         setNumBtn(true)
    //     }
    // }

    const handleClick = e => {
        e.preventDefault();
        setProgress(progress + 1);

        console.log('progress: ',progress)
        // console.log('numBtn: ',numBtn)
    }

    const goBack = e => {
        e.preventDefault();
        console.log(progress)
        setProgress(progress - 1)
       
        console.log('progress: ', progress)
        // console.log('numBtn', numBtn)
    }

    return (
        <Row className="container-fluid d-flex flex-column align-items-center page register-pg border">
            {progress === 0 ? (<Duration handleClick={handleClick}/>) : null}
            {progress === (1) ? (<Relocate handleClick={handleClick}/>) : null}
            {progress === (2) ? (<WorkExp handleClick={handleClick}/>) : null}
            {progress === (3) ? (<Industries handleClick={handleClick}/>) : null}
            {progress === (4) ? (<Languages handleClick={handleClick} />) : null}
            {progress === (5) ? (<Register1 handleClick={handleClick} />) : null}
            {progress === (6) ? (<Register2 handleClick={handleClick}/>) : null}
            {progress === (7) ? (<RegComp />) : null}
            <div className="position-relative d-flex flex-column">

          
             {progress>0 ? (<ButtonGroup aria-label="Basic example" className="mb-4 position-absolute bottom-0 start-50 translate-middle-x">
                    <Button data-toggle="button" className="dir-btn" aria-pressed="false" onMouseDown={goBack}>Back</Button>
                    <Button data-toggle="button" className="dir-btn" aria-pressed="false" onMouseDown={handleClick}>Next</Button>
                </ButtonGroup>) : null}

                <div className="position-absolute bottom-0 start-50 translate-middle-x prog-bar">
                    <div className={progress === 0 ? "dot dot-active" : "dot"}></div>
                    <div className={progress === 1 ? "dot dot-active" : "dot"}></div>
                    <div className={progress === 2 ? "dot dot-active" : "dot"}></div>
                    <div className={progress === 3 ? "dot dot-active" : "dot"}></div>
                    <div className={progress === 4 ? "dot dot-active" : "dot"}></div>
                    <div className={progress === 5 ? "dot dot-active" : "dot"}></div>
                    <div className={progress === 6 ? "dot dot-active" : "dot"}></div>
                    {/* <div className={progress === (100) ? "dot dot-active" : "dot"}></div> */}
                </div>
            </div>

        </Row>
    )
}

export default Register