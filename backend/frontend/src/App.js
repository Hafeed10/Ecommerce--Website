import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AnotherPage from './components/AnotherPage';
import './index.css';
import Signin from './components/Signin';
import Login from './components/Login';
import CardProvider from './context/CardContext';

const App = () => {
  return (
    <BrowserRouter>
      <CardProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/another" element={<AnotherPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CardProvider>
    </BrowserRouter>
  );
};

export default App;