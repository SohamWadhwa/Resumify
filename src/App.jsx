import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Tips from './pages/Tips';
import Aboutme from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/tips" element={<Tips />} />
        </Routes>
        <Routes>
          <Route path='/about-me' element={<Aboutme />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
