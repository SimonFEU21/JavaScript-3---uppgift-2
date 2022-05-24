import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import EventDetails from './Views/EventDetails';
import EventsView from './Views/EventsView';

const App:React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element= { <EventsView /> } />
          <Route path='/event:id' element= { <EventDetails /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
