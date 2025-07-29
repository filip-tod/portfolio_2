import './App.css'
import { Routes, Route } from 'react-router';
import Dashboard from './dashboard/Dasboard';
import Pomodoro from './pomodoro/Pomodoro';
import Map from './map/Map';
import Home from './home/Home';
import Footer from './footer/Footer';
import Nav from './nav/Nav';

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/map' element={<Map />} />
        <Route path='/pomodoro' element={<Pomodoro />} />
      </Routes>


      <Footer />
    </div>
  )
}

export default App
