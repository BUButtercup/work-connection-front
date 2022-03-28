import './App.css';
import 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import Homepage from './pages/Homepage'
import UserProfile from './pages/UserProfile';

function App() {



  return (
    <div className="App">
      <h1>This is App!</h1>
      <Header/>

      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Homepage />} />
        <Route path='profile' element={<UserProfile/>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>


    </div>
  );
}

export default App;
