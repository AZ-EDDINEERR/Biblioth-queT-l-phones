// src/Panier.js
import { useContext } from "react";
import CartContext from "./CartContext";

function Panier() {
  // On récupère panier ET supprimerDuPanier
  const { panier, supprimerDuPanier } = useContext(CartContext);

  return (
    <div className="Panier">
      <h1>Mon Panier</h1>

      {panier.length === 0 ? (
        <p className="alert alert-warning">Aucun produit dans la panier</p>) : (
        <div className="display-card">
          {panier.map((x, i) => (
            <div className="card" key={i}>
              <img src={x.image} className="card-image" alt={x.nom} />
              <h1 className="card-title">{x.nom}</h1>
              <p className="card-text">{x.description}</p>
              <p className="card-prix">{x.prix} DH</p>

              {/* Bouton supprimer */}
              <button
                id="btn-supProd"
                onClick={() => supprimerDuPanier(i)}
              >
                Supprimer la commande
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Panier;
