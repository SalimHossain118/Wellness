/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import CareerPage from "./pages/CareerPage";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PetProductsPage from "./components/products/PetProductsPage";
import PoultryPage from "./components/products/poulrty/PoultryPage";
import FishPage from "./components/products/fish/FishPage";
import AgroPage from "./components/products/agro/AgroPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allproducts" element={<ProductsPage />} />
        <Route path="/poultryproducts" element={<PoultryPage />} />
        <Route path="/agroproducts" element={<AgroPage />} />
        <Route path="/petsproducts" element={<PetProductsPage />} />
        <Route path="/fishproducts" element={<FishPage />} />
        <Route path="/gallery" element={<ProductsPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
