import './App.css';
import {Container} from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import Homepage from './pages/Homepage'
import Register from './pages/Register';
import Signin from './pages/Signin'
import Profile from './pages/Profile';
import Missing from './pages/Missing';
import Unauthorized from './pages/Unauthorized';
import Footer from './components/Footer';

function App() {



  return (
    <Container className="d-flex flex-column align-items-center app" fluid>
      {/* <h1>This is App!</h1> */}
      <Header/>

      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Homepage />} />
        <Route path='register' element={<Register/>}></Route>
        <Route path='signin' element={<Signin/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='unauthorized' element={<Unauthorized/>}/>
          <Route path='*' element={<Missing/>}/>
      </Routes>

      <Footer/>
    </Container>
  );
}

export default App;
