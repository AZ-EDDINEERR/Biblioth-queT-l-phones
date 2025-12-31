// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification simple (dans un vrai projet → API/BDD)
    if (email === "azeddine@gmail.com" && password === "123" ) {
      setIsAuth(true);
      navigate("/main"); // redirection vers accueil
    } else {
      setError("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Connexion</h2>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label>Email</label><br/>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            
          />
        </div>

        <div className="mb-3">
          <label>Mot de passe</label><br/>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;
