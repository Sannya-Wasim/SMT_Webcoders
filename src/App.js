import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="h-10 bg-red-800"></div>
    </div>
  );
}

export default App;
