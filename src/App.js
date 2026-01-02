import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./myprojet/header";
import Main from "./myprojet/main";
import Footer from "./myprojet/footer";
import Produits from "./myprojet/produits";
import Panier from "./myprojet/panier";
import Favoris from "./myprojet/favoris";
import Phone from "./myprojet/phone";
import CartContext from "./myprojet/CartContext";
import Forms from "./myprojet/forms";
import Contact from "./myprojet/contact";
import PCportable from "./myprojet/PCportable";
import ProduitRecent from "./myprojet/ProduitR";
function App() {
  const [panier, setPanier] = useState([]);
  const ajouterAuPanier = (produit) => {
    setPanier((prev) => [...prev, produit]);
  };
  const supprimerDuPanier = (index) => {
    setPanier((prev) => prev.filter((_, i) => i !== index));
  };
  // --- Favoris ---
  const [favoris, setFavoris] = useState([]);
  const ajouterAuxFavoris = (produit) => {
    if (!favoris.find((item) => item.id === produit.id)) {
      setFavoris((prev) => [...prev, produit]);
    }
  };
  const supprimerDesFavoris = (index) => {
    setFavoris((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <CartContext.Provider
      value={{
        panier,
        ajouterAuPanier,
        supprimerDuPanier,
        favoris,
        ajouterAuxFavoris,
        supprimerDesFavoris,
      }}
    >
      <Router>
        <Routes>
          {/* Page Login */}
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <>
                <Header />
                <Main />
                <Footer />
              </>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/recent"
            element={
              // <ProtectedRoute>
              <>
                <Header />
                <ProduitRecent />
                <Footer />
              </>
              // </ProtectedRoute>
            }
          />
            <Route
            path="/produits"
            element={
              // <ProtectedRoute>
              <>
                <Header />
                <Produits />
                <Footer />
              </>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/phone"
            element={
              // <ProtectedRoute>
              <>
                <Header />
                <Phone />
                <Footer />
              </>
              // </ProtectedRoute>
            }
          />
             <Route
            path="/Pcportable"
            element={
              // <ProtectedRoute>
              <>
                <Header />
                <PCportable />
                <Footer />
              </>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/panier"
            element={
              // <ProtectedRoute>
              <>
                <Header />
                <Panier />
                <Footer />
              </>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              // <ProtectedRoute>
              <>
                <Header />
                <Contact />
                <Footer />
              </>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/forms"
            element={
              // <ProtectedRoute>
              <>
                <Header />
                <Forms />
                <Footer />
              </>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/favoris"
            element={
              // <ProtectedRoute>
              <>
                <Header />
                <Favoris />
                <Footer />
              </>
              // </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
