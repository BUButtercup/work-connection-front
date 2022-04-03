import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Image, ButtonGroup, Button } from 'react-bootstrap'
import './style.css'
import Ukrainian from '../../assets/images/ukraine.png'
import German from '../../assets/images/germany.png'
import English from '../../assets/images/united-kingdom.png'

const Homepage = () => {
    const [languageImg, setLanguageImg] = useState(Ukrainian)
    const [langWritten, setLangWritten] = useState('український')
    const navigate = useNavigate();


    return (

        <Row className="container-fluid d-flex justify-content-center align-items-center page">
            <div className="m-3 hp-img"></div>

            <h1 className="text-center">Welcome to Rovie!</h1>
            <div className="col-12 col-med-8 d-flex flex-column align-items-center">
                <p className="col-12 col-md-8 text-center hp">Get job-ready in 8 simple steps
and gain access to the German job market today!
                </p>
                <ButtonGroup aria-label="Basic example">
                    <Button data-toggle="button" aria-pressed="false" onClick={()=>navigate('signin')}>Sign In</Button>
                    <Button data-toggle="button" aria-pressed="false" onClick={()=>navigate('register')}>Register</Button>
                </ButtonGroup>
                <Image className="m-3 lang-circle" src={languageImg} />
                <small>Current Language:</small>
                <small>{langWritten}</small>
                <a className="m-2 link-tag" href=""><small>Looking to post a job?</small></a>
            </div>


        </Row>


    )
}

export default Homepage