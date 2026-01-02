// src/Produits.js
import { useContext, useState } from "react";
import CartContext from "./CartContext";
import object from "./Obproduits";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

function Produits() {
  const { ajouterAuPanier, ajouterAuxFavoris } = useContext(CartContext);

  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [nom1, setNom1] = useState("");

  // Ajouter produit
  const handleAjouter = (produit) => {
    ajouterAuPanier(produit);

    // afficher message bootstrap
    setMessage(`${produit.nom} a été ajouté au panier avec succès.`);
    setShowAlert(true);

    // masquer après 3 secondes
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  // Recherche
  const produitsTele = object.objectTele.filter((x) =>
    x.nom.toLowerCase().includes(nom1.toLowerCase())
  );

  return (
    <div className="Produits container ">

      {/* ===== ALERT BOOTSTRAP ===== */}
      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}

      {/* ===== RECHERCHE ===== */}
      <div className="d-flex mb-4 gap-2">
        <input
          type="text"
          placeholder="Chercher un produit"
          className="form-control"
          onChange={(e) => setNom1(e.target.value)}
        />
      </div>

      {/* ===== TELEPHONES ===== */}
      <h1 className="titre">Téléphones</h1>
      <div className="display-card">
        {produitsTele.map((x, index) => (
          <div className="card" key={index}>
            <img src={x.image} className="card-image" alt={x.nom} />
            <h1 className="card-title">{x.nom}</h1>
            <p className="card-text">{x.description.substring(0,100)}...</p>
            <p className="card-prix">{x.prix} DH</p>
            <div className="d-flex align-items-center justify-content-between mx-3">
              <button onClick={() => handleAjouter(x)} className="btn btn-info">
                <FaShoppingCart /> Acheter
              </button>

              <span onClick={() => ajouterAuxFavoris(x)} className="faHeart">
                <FaHeart />
              </span>
            </div>
            </div>
        ))}
          </div>

      {/* ===== PC ===== */ }
          <h1 h1 className = "titre" > PC portable</h1>
      <div className="display-card">
        {object.objectPc.map((x, index) => (
          <div className="card" key={index}>
            <img src={x.image} className="card-image" alt={x.nom} />
            <h1 className="card-title">{x.nom}</h1>
            <p className="card-text">{x.description}</p>
            <p className="card-prix">{x.prix} DH</p>

            <button onClick={() => handleAjouter(x)}>
              <FaShoppingCart /> Acheter
            </button>

            <span onClick={() => ajouterAuxFavoris(x)} className="faHeart">
              <FaHeart />
            </span>
          </div>
        ))}
      </div>

      {/* ===== RECENTS ===== */}
      <h1 className="titre">Produits Récents</h1>
      <div className="display-card">
        {object.prod.map((x, index) => (
          <div className="card" key={index}>
            <img src={x.image} className="card-image" alt={x.nom} />
            <h1 className="card-title">{x.nom}</h1>
            <p className="card-text">{x.description}</p>
            <p className="card-prix">{x.prix} DH</p>
<div className="d-flex align-items-center justify-content-between mx-3">
              <button onClick={() => handleAjouter(x)} className="btn btn-info">
                <FaShoppingCart /> Acheter
              </button>

              <span onClick={() => ajouterAuxFavoris(x)} className="faHeart">
                <FaHeart />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Produits;
