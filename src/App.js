import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ProductDetailPage } from './pages'
import './App.scss';

export const App = () => {
  return (
    <>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/items" element={<HomePage></HomePage>}></Route>
          <Route path="/items/:id" element={<ProductDetailPage></ProductDetailPage>}></Route>
        </Routes>
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </>
  );
};
