import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from '../../pages/Main';
import Sub from '../../pages/Sub';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
