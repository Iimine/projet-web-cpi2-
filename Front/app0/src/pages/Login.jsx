// Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/style.scss";


function Login() {
  return (
    <div className="pages-container">
      <div className="form-container">
        <h1>Login</h1>
        <form action="connec.php" method="POST">
          <div>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name ="name"cplaceholder="Entrez votre nom" />
          </div>
          <div>
            <label htmlFor="telephone">email</label>
            <input type="text" id="telephone" name ="email"  placeholder="Entrez votre téléphone" />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe" />
          </div>
          <button>Login</button>
          <span>Vous n'avez pas de compte ? <Link to="/Inscription">Inscrivez-vous</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Login;
