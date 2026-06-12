/**
 * users.js — Identifiants de connexion
 *
 * Tableau exporté utilisé par LoginView pour vérifier les identifiants saisis.
 * Les valeurs sont lues depuis les variables d'environnement définies dans .env
 * afin de ne pas exposer les identifiants dans le code source.
 *
 * Variables attendues dans .env :
 *   VITE_USER_EMAIL : adresse email de l'utilisateur
 *   VITE_USER_PSW   : mot de passe de l'utilisateur
 *
 * Structure d'un utilisateur :
 *   - email : adresse email
 *   - psw   : mot de passe en clair (pas de hash, données de démo uniquement)
 */

export const users = [

  {
  email: import.meta.env.VITE_USER_EMAIL,
  psw: import.meta.env.VITE_USER_PSW
  }

]
