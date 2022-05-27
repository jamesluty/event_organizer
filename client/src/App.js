import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Views/Home';
import View from './Views/View';
import EventForm from './Views/EventForm';
import ScrollToTop from './Components/ScrollToTop';
import Login from './Views/Login';
import Signup from './Views/Signup';
import Account from './Views/Account';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [ email, setEmail ] = useState("");

  const getEmail = (email) => {
    setEmail(email)
  }

  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/account" element={<Account email={email}/>}/>
          <Route path="/event/:event/:id" element={<View/>}/>
          <Route path="/login/user" element={<Login email={getEmail}/>}/>
          <Route path="/signup/user" element={<Signup/>}/>
          <Route path="/create/event" element={<EventForm/>}/>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
