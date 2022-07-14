import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage} from "./pages";
import { SearchBar, ProductsList, ProductDetail} from './components';


export const App = () => {
  return (
    <>
      <React.StrictMode>
      <BrowserRouter>
        <SearchBar></SearchBar>

        <section id="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/items" element={<ProductsList></ProductsList>}></Route>
              <Route path="/items/:id" element={<ProductDetail></ProductDetail>}></Route>

              <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
          </div>
        </section>
      </BrowserRouter>
      </React.StrictMode>
    </>
  );
};
