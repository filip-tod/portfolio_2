import './App.css'
import { Routes, Route, useLocation } from 'react-router';
import Dashboard from './dashboard/Dasboard';
import Pomodoro from './pomodoro/Pomodoro';
import Map from './map/Map';
import Home from './home/Home';
import Footer from './footer/Footer';
import Nav from './nav/Nav';
import Login from './login/Login';

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
   <div id="layout" className={isLoginPage ? "login-bg" : ""}>
      {!isLoginPage && <Nav />}

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/map' element={<Map />} />
          <Route path='/pomodoro' element={<Pomodoro />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
    </div>
  )
}

export default App
