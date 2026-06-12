/**
 * animals.js — Données statiques des animaux de la famille
 *
 * Tableau exporté utilisé par :
 *   - ProfilView    : pour afficher la liste des animaux
 *   - AnimalCardView: pour afficher la fiche détaillée d'un animal
 *   - FormApp       : pour proposer la sélection d'un animal lors d'une demande de garde
 *
 * Structure d'un animal :
 *   - id         : identifiant unique (number)
 *   - name       : prénom de l'animal
 *   - type       : espèce ("Chien", "Chat"…)
 *   - age        : âge en années
 *   - emoji      : emoji représentatif
 *   - nickname   : surnom(s) (optionnel)
 *   - meals      : instructions de repas (optionnel)
 *   - treats     : informations sur les friandises (optionnel)
 *   - commands   : commandes connues par l'animal (optionnel)
 *   - play       : activités de jeu (optionnel)
 *   - belongings : affaires à emporter lors d'une garde (optionnel)
 *   - likes      : ce que l'animal aime (optionnel)
 *   - dislikes   : ce que l'animal n'aime pas (optionnel)
 *
 * Les champs optionnels sont absents des entrées minimales (ex: Odin, Einar).
 */

export const animals = [
  {
    id: 1,
    name: "Murphy",
    type: "Chien",
    age: 4,
    emoji: "🐶",
    nickname: "Mumu, MuchMuch",
    meals: [
      "Un gobelet midi et soir à ras bord",
      "ATTENTION pas de nourriture chaude sinon elle vomit"
    ],
    treats: [
      "ATTENTION au régime, donc pas trop"
    ],
    commands: {
      basic: ["Le pied", "Assis", "Couché", "Roule"],
      basket: ["Pas bouger", "Le panier"],
      outside: ["Tu rentres", "Tu montes", "Tu laisses"],
      paws: ["La patte", "L'autre patte", "Patte arrière"]
    },
    play: ["Promener !", "Le chat !", "Odin !", "La balle !", "La corde !"],
    belongings: ["Laisse", "Brosse", "Sac à crotte", "Couverture", "Corde"],
    likes: ["Ballons", "Balles", "Glaçons (quand il fait chaud)", "La Bagarre"],
    dislikes: ["Les chiens que je ne connais pas", "Les bruits forts", "Rester seule trop longtemps"]
  },
  { id: 2, name: "Odin", type: "Chat", age: 8, emoji: "🐱" },
  { id: 3, name: "Einar", type: "Chat", age: 8, emoji: "🐱" }
]
