
import './App.css';
import Aboutus from './components/Aboutus';
import Budgettracker from './components/Budgettracker';
import Collaboration from './components/Collaboration';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/time" element={<Timeline/>}/>
        <Route path="/collaborate" element={<Collaboration/>}/>
        <Route path="/budget" element={<Budgettracker/>}/>
      </Routes>
    </div>
  )
}

export default App;
