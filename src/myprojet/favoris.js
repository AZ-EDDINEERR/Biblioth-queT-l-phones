// src/Favoris.js
import { useContext } from "react";
import CartContext from "./CartContext";

function Favoris() {
  const { favoris, supprimerDesFavoris } = useContext(CartContext);

  return (
    <div className="Favoris">
      <h1>Mes Favoris</h1>

      {favoris.length === 0 ? (
        <p className="alert alert-warning">Aucun produit dans les favoris</p>

      ) : (
        <div className="display-card ">
          {favoris.map((x, i) => (
            <div className="card" key={i}>
              <img src={x.image} className="card-image" alt={x.nom} />
              <h1 className="card-title">{x.nom}</h1>
              <p className="card-text">{x.description}</p>
              <p className="card-prix">{x.prix} DH</p>

              <button id="btn-supFavoris" onClick={() => supprimerDesFavoris(i)}>
                Supprimer des favoris
              </button>
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
}

export default Favoris;
