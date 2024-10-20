import './style.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import SchedulePage from './components/SchedulePage';
import FormPage from './components/FormPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
