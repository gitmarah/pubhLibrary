import React from 'react';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Onboard from './pages/Onboard';
import Home from './pages/Home';
import Timetable from './pages/Timetable';
import About from './pages/About';
import Tutors from './pages/Tutors';
import Materials from './pages/Materials';

const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='timetable' element={<Timetable />} />
        <Route path='about' element={<About />} />
        <Route path='tutors' element={<Tutors />} />
        <Route path='materials' element={<Materials />} />
      </Route>
    </Routes>
  )
}

export default App