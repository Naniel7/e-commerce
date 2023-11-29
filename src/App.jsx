import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import IndexHome from './components/IndexHome';
import CardList from './components/CardList';
import ItemDetail from './Pages/ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/products" element={<CardList />} />
          {/* Cambia la ruta a /product/:id */}
          <Route path="/product/:id" element={<ItemDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
