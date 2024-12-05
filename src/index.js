import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Budgettracker from './components/Budgettracker';
import Collaboration from './components/Collaboration';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import Footer from './components/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='bg-slate-600 h-9'></div>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/time" element={<Timeline/>}/>
        <Route path="/collaborate" element={<Collaboration/>}/>
        <Route path="/budget" element={<Budgettracker/>}/>
      </Routes>
  <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

