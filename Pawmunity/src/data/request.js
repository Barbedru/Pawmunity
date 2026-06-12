/**
 * request.js — Données statiques des demandes de garde initiales
 *
 * Tableau exporté utilisé par App.vue comme données de départ.
 * App.vue le charge dans un ref() et le passe en prop à HomeView et CalendarView.
 * Les nouvelles demandes créées via FormApp sont ajoutées dans ce même ref (en mémoire).
 * Les données ne persistent pas entre les rechargements de page.
 *
 * Structure d'une demande :
 *   - id         : identifiant unique (number)
 *   - name       : nom de l'animal concerné
 *   - family     : nom de la famille qui fait la demande
 *   - description: texte libre décrivant la situation
 *   - date       : période affichée en string lisible (ex: "29-30 Juin")
 *   - startDate  : date de début au format ISO YYYY-MM-DD (utilisée par le calendrier)
 *   - endDate    : date de fin au format ISO YYYY-MM-DD (utilisée par le calendrier)
 *   - location   : true = garde chez le propriétaire | false = garde chez le gardien
 *   - responses  : nombre de réponses reçues
 *   - urgent     : true = demande urgente (badge orange + bordure dans Card)
 */

export const request = [
  {
    id: 1,
    name: "Murphy",
    family: "Famille Druval",
    description: "Besoin urgent de garde pour Murphy. Départ imprévu ce soir",
    date: "29-30 Juin",
    startDate: "2026-06-29",
    endDate: "2026-06-30",
    location: true,
    responses: 2,
    urgent: true
  },
  {
    id: 2,
    name: "Suzie",
    family: "Famille Clet",
    description: "J'aurais besoin que quelqu'un s'occupe de Suzie entre les midis",
    date: "01 Juillet",
    startDate: "2026-07-01",
    endDate: "2026-07-01",
    location: false,
    responses: 1,
    urgent: true
  },
  {
    id: 3,
    name: "Zouk",
    family: "Famille Miquet",
    description: "J'ai besoin qu'on s'occupe de Zouk pour le week-end",
    date: "1-2 Août",
    startDate: "2026-08-01",
    endDate: "2026-08-02",
    location: false,
    responses: 1,
    urgent: false
  },
  {
    id: 4,
    name: "Leito & Arizona",
    family: "Famille Pastori",
    description: "Nous avons besoin d'une garde pour nos deux chiens pour 2 jours",
    date: "5-6 Août",
    startDate: "2026-08-05",
    endDate: "2026-08-06",
    location: false,
    responses: 2,
    urgent: false
  },
]
