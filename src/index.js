import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './navigation';
import UseETH from './routes/UseETH';
import Learn from './routes/Learn';
import Developers from './routes/Developers';
import Enterprise from './routes/Enterprise';
import Community from './routes/Community';
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="useEth" element={<UseETH />} />
      <Route path="learn" element={<Learn />} />
      <Route path="developers" element={<Developers />} />
      <Route path="enterprise" element={<Enterprise />} />
      <Route path="community" element={<Community />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
