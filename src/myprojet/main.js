import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="d-main">
      <main className="main">
        <h1>
          Bibliothéque de <br /> Téléphones, PC & <br /> Tablettes
        </h1>
        <p>
          Explorez notre collection de produits electroniques <br /> et trouvz
          votre appreil ideal.
        </p>
        <button className="btn btn-outline-secondary">
          <Link to="/produits" className="text-muted nav-link"> Voir les produits</Link>
        </button>
      </main>
      <div className="main-logo">
        <img src="https://zonetech.ma/wp-content/uploads/2023/12/PC-Portable-casablanca-1024x604.jpeg" width="700px" height="500px" />
      </div>
    </div>
  );
}
export default Main;
