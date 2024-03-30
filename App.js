import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsList />} />

      </Routes>
    </Router>
  );
}

export default App;
