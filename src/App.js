import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter, Route , Routes } from 'react-router-dom'
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import JobCard from './components/Jobs/JobCard';

function App() {
 let handleUserLogin= (token)=>{
    console.log(token);
  }
  return (
    <div >
      <BrowserRouter>
      <Navbar isLoggedIn/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login loginUser={handleUserLogin()}/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/forgot" element={<ForgotPassword/>} />
          <Route exact path="/reset" element={<ResetPassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
