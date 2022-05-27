import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Views/Home';
import View from './Views/View';
import EventForm from './Views/EventForm';
import ScrollToTop from './Components/ScrollToTop';
import Login from './Views/Login';
import Signup from './Views/Signup';
import Account from './Views/Account';

function App() {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/event/:event/:id" element={<View/>}/>
          <Route path="/user/account" element={<Account/>}/>
          <Route path="/login/user" element={<Login/>}/>
          <Route path="/signup/user" element={<Signup/>}/>
          <Route path="/create/event" element={<EventForm/>}/>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
