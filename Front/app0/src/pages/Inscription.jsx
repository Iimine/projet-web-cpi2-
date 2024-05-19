import React from "react";
import { Link } from "react-router-dom";
import "../css/style.scss";
import { useState } from "react";
  

function Inscription() {
    const[username,setusern]=useState('');
    const[telephone,settelephone]=useState('');
    const[pass,setpass]=useState('');

  return (
    <div className="pages-container">
      <div className="form-container">
        <h1>Inscription</h1>
        <form action="connec.php" method="POST">
          <div>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="name"placeholder="Entrez votre nom"onChange={(e) => { setusern(e.target.value)
            console.log(username) }} />

          </div>
          <div>
            <label htmlFor="telephone">email</label>
            <input type="text" id="telephone" name="email" placeholder="Entrez votre téléphone"    onChange={(e) => { settelephone(e.target.value) }}/>
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe"   onChange={(e) => { setpass(e.target.value) }} />

          </div>
          <button  onClick={Ajouter}>Inscription</button>
          <span>Vous avez déjà un compte ? <Link to="/Login">Connectez-vous</Link></span>
        </form>
      </div>
    </div>
  );
  const Ajouter=async()=>{
    await axios.post('http://localhost:80//register.php',{username,pass,telephone});
  }
}

export default Inscription;