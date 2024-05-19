<?php
// Vérifie qu'il provient d'un formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Identifiants MySQL
    $host = "localhost";
    $username = "root";
    $password = "root";
    $database = "blogs";

    // Récupérer les données du formulaire
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Vérifier si les champs existent et sont valides
    if (!isset($name) || empty($name)) {
        die("S'il vous plaît entrez votre nom");
    }
    if (!isset($password) || empty($password)) {
        die("S'il vous plaît entrez votre nom");
    }

    if (!isset($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("S'il vous plaît entrez une adresse e-mail valide");
    }

    // Ouvrir une nouvelle connexion au serveur MySQL
    $mysqli = new mysqli($host, $username, $password, $database);

    // Afficher toute erreur de connexion
    if ($mysqli->connect_error) {
        die('Erreur de connexion (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
    }

    // Préparer la requête d'insertion SQL
    $statement = $mysqli->prepare("INSERT INTO users (name, email,password) VALUES(?, ?,?)");

    // Vérifier si la préparation de la requête a échoué
    if (!$statement) {
        die("Échec de la préparation de la requête : (" . $mysqli->errno . ") " . $mysqli->error);
    }

    // Associer les valeurs et exécuter la requête d'insertion
    $statement->bind_param( $name, $email,$password);

    if ($statement->execute()) {
        // Utiliser htmlspecialchars pour éviter les attaques XSS
        $safe_name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $safe_email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
        echo "Salut " . $safe_name . "!, votre adresse e-mail est " . $safe_email;
    } else {
        echo "Erreur lors de l'exécution de la requête : (" . $statement->errno . ") " . $statement->error;
    }

    // Fermer la déclaration et la connexion
    $statement->close();
    $mysqli->close();
} else {
    echo "Aucune donnée soumise.";
}
?>
