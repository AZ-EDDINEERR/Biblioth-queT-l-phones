// src/myprojet/Forms.js
import React from "react";
import { useState, useEffect } from 'react'
function Contact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [numéro, setNuméro] = useState('');
  const [ville, setVille] = useState('');
  const [color, setColor] = useState('');
  const [SHOW, setSHOW] = useState(false);
  const [SH, setSH] = useState(false);
  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={(e) => {
        e.preventDefault()
        setSH(true)
      }

      }>
        <h2 className="form-title text-center">Contact</h2>
        <label htmlFor="" className="form-label">Nom complet</label>
        <input className={'form-control'} type="text" placeholder="Nom + Prénom" onChange={(e) => setNom(e.target.value)} required />
        <label htmlFor="" className="form-label">Email</label>
        <input className={'form-control'} type="text" placeholder="EX: azeddine...@gmail.com" onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="" className="form-label" >Numéro Téléphone</label>
        <input type="text" placeholder="0600000000" onChange={(e) => setNuméro(e.target.value)} />
        <label htmlFor="" className="form-label">Ville</label>

        <input type="text" placeholder="Ville" className="form-control" onChange={(e) => setVille(e.target.value)} />
        <label htmlFor="" className="form-label">Message</label>
        <textarea placeholder="Votre message ici..." onChange={(e) => setMessage(e.target.value)} required className="form-control" > </textarea>
        <button type="submit" className="btn btn-outline-primary my-3" onClick={() => setSHOW(true)}>Envoyer</button>
      </form>

      {SHOW & SH ?
        <ul className="Contact">
          <h1>Votre message a été envoyé avec succès</h1>
          <><li>Nom:{nom}</li>
            <li>Email:{email}</li>
            <li>Numéro Téléphone:{numéro}</li>
            <li>Ville:{ville}</li>
            <li>Message:{message}</li></>
        </ul> : ''}

    </div>
  );
}

export default Contact;
