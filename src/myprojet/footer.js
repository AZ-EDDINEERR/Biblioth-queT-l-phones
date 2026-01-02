// src/myprojet/Footer.js
import React from "react";  
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row">

          {/* Logo et description */}
          <div className="col-md-4 mb-4">
            <h2 className="fw-bold">ErrShop</h2>
            <p>
              Votre boutique en ligne pour tous les produits électroniques et
              gadgets tendance.
            </p>
          </div>

          {/* Liens utiles */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Accueil</a></li>
              <li><a href="/produits" className="text-white text-decoration-none">Produits</a></li>
              <li><a href="/favoris" className="text-white text-decoration-none">Favoris</a></li>
              <li><a href="/panier" className="text-white text-decoration-none">Panier</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux et newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Suivez-nous</h5>
            <div className="d-flex gap-3 mb-3">
               <a href="https://github.com/" target="_blank" rel="noreferrer" className="d-flex align-items-center text-dark text-decoration-none">
                <FaGithub style={{ color: "#010408ff", fontSize: "24px" }} className="me-2" /> GitHub
               </a>
              <a href="https://www.linkedin.com/in/az-eddine-errahmaoui-672759376" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-dark text-decoration-none">
                <FaLinkedin style={{ color: "#0A66C2", fontSize: "24px" }} className="me-2" /> Linkedin
               </a>
              <a href="https://twitter.com/devAzeddine" target="_blank" rel="noreferrer" className="d-flex align-items-center text-dark text-decoration-none">
                <FaTwitter style={{ color: "#0edbffff", fontSize: "24px" }} className="me-2" /> Twitter
              </a>
            </div>
            <h6 className="fw-bold">Newsletter</h6>
            <form className="d-flex">
              <input type="email" className="form-control me-2" placeholder="Votre email" />
              <button type="submit" className="btn btn-primary">S’inscrire</button>
            </form>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center pb-3">
          &copy; {new Date().getFullYear()} ErrShop. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
