import { useContext, useState } from "react";
import CartContext from "./CartContext";
import object from "./Obproduits";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Phone() {

  const { ajouterAuPanier, ajouterAuxFavoris } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");

  // Filtrage dynamique
  const produitsFiltres = object.objectTele.filter((p) =>
    p.nom.toLowerCase().includes(search.toLowerCase())
  );

  // Ajouter au panier
  const handleAjouter = (produit) => {
    ajouterAuPanier(produit);

    setMessage(`${produit.nom} a été ajouté au panier.`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="container  phonePortable">

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

      <h1 className="titre">Téléphones</h1>

      {/* ===== RECHERCHE ===== */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Rechercher un téléphone"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ===== PRODUITS ===== */}
      <div className="display-card">
        {produitsFiltres.map((x, index) => (
          <div className="card" key={index}>
            <img src={x.image} className="card-image" alt={x.nom} />

            <h1 className="card-title">{x.nom}</h1>
            <p className="card-text">  {x.description.substring(0, 150)}</p>
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
