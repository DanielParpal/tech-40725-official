// Nous ajoutons un "event listener" (gestionnaire d'événements)
document.getElementById('inputPrix').addEventListener("keyup", function() {
    
    // Nous récupérons la nouvelle valeur du prix
    var prix = document.getElementById('inputPrix').value;
    
    // Nous l'affichons dans la console pour aider le "debugging"
    console.log(prix);
    
    // Nous choisissons quelle alerte afficher en fonction du prix
    if (prix > 50) {
        document.getElementById('alerte-avec-rabais-20').style.display = "block";
        document.getElementById('alerte-sans-rabais-20').style.display = "none";
    } else {
        document.getElementById('alerte-avec-rabais-20').style.display = "none";
        document.getElementById('alerte-sans-rabais-20').style.display = "block";
    }
    
});

