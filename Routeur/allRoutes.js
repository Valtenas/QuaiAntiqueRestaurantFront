import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
new Route("/", "Accueil", "/pages/home.html", [], []),
new Route("/galerie", "La galerie", "/pages/galerie.html", [], []),
new Route("/signin", "Connexion", "/pages/auth/signin.html", "/js/auth/signin.js", ["disconnected"]),
new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js", ["disconnected"]),
new Route("/account", "Mon compte", "/pages/auth/account.html", [], ["client", "admin"]),
new Route("/editPassword", "Changement mot de passe", "/pages/auth/editPassword.html", [], ["client", "admin"]),
new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", [], ["client"]),
new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", [], ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";