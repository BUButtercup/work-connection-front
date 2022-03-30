import { React, useState } from 'react'
import { Row, ProgressBar, Button } from 'react-bootstrap'
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
    const [progress, setProgress] = useState(0)

    const handleClick = e => {
        e.preventDefault();
        setProgress(progress+100/7)

    }

    return (
        <Row className="container-fluid d-flex flex-column align-items-center page register-pg border">
            {progress===0 ? (<Duration handleClick = {handleClick}/>) : null}
            {progress===(100/7) ? (<Relocate handleClick={handleClick}/>) : null}
            {progress===(2*(100/7)) ? (<WorkExp handleClick={handleClick}/>) : null}
            {progress===(3*(100/7)) ? (<Industries handleClick={handleClick}/>) : null}
            {progress===(4*(100/7)) ? (<Languages handleClick={handleClick}/>) : null}
            {progress===(5*(100/7)) ? (<Register1 handleClick={handleClick}/>) : null}
            {progress===(6*(100/7)) ? (<Register2 handleClick={handleClick}/>) : null}
            {progress===(100) ? (<RegComp/>) : null}
            <ProgressBar className="col-9" now={progress} />

        </Row>
    )
}

export default Register