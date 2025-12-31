// src/myprojet/Forms.js
import React from "react";

function Forms() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="card-title text-center mb-4">Inscription</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Nom complet</label>
            <input type="text" className="form-control" placeholder="Nom complet" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input type="password" className="form-control" placeholder="Mot de passe" />
          </div>

          <div className="mb-3">
            <label className="form-label">Code postal</label>
            <input type="text" className="form-control" placeholder="Code postal" />
          </div>

          <div className="mb-3">
            <label className="form-label">Ville</label>
            <input type="text" className="form-control" placeholder="Ville" />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forms;
