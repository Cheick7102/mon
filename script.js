console.log("SOLAREA est prèt !");
function ouvrirMenu( ) {
    const menu =
    document.querySelector(".menu");
    menu.classList.toggle("actif");
}
function ouvrirWhatsApp( ) {
    const numero =
   "22369388731";
    const message = "Bonjour SOLAREA,je souhaite avoir des informations sur vos solutions solaires.";
    const lien =
    "https://wa.me/" + numero + "? text=" +
    encodeURIComponent(message);
          window.open(lien,"blank");
}
function envoyerDemande() {
    const nom =
document.getElementById("nom").Value;
    const email =
document.getElementById("email").Value;
    const projet =
document.getElementById("projet").Value;
    if (nom ==="" || email==="" || projet==="") {
        alert("Veuillez remplir tous les champs.");
        return;
    }
    const numero = "22369388731";
    const message = "Bonjour SOLAREA,%0A%0A"+
                    "Nom : " + nom + "%0A" + 
                    "Email : " + email + "%0A" +
                    "Projet : " + projet;
                const lien =
"https://wa.me/" + numero + "? text=" + message;
    window.open(lien, "_blank");
}