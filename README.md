# Pawmunity

> Projet en cours de conception — front-end uniquement

Application mobile-first qui connecte les familles d'une même communauté pour s'entraider dans la garde de leurs animaux.

---

## Concept

Pawmunity est une plateforme privée destinée à une communauté de familles vivant à proximité (ex : caserne de gendarmerie, résidence, quartier). Elle permet d'organiser simplement et rapidement la garde d'animaux entre membres de confiance, pour deux usages :

- **Anticipé** — vacances, week-ends, absences planifiées
- **Urgent** — départ imprévu, contrainte professionnelle de dernière minute

---

## Fonctionnalités

### Implémentées

| Écran | Description |
|---|---|
| Landing | Accueil avec connexion / création de compte |
| Home | Liste des demandes de garde, filtres (toutes / urgentes), ajout d'une demande |
| Formulaire | Modal 2 étapes — animal, dates, lieu, urgence |
| Calendrier | Visualisation des gardes planifiées (VCalendar) |
| Profil | Liste des animaux de la famille + historique des gardes |
| Fiche animal | Détail complet : alimentation, commandes, accessoires, goûts… |

### Prévues

- Comptes famille avec authentification
- Réponse aux demandes + validation par la famille demandeuse
- Statuts de demande (ouverte / en cours / terminée)
- Notifications visuelles pour les demandes urgentes
- Calendrier partagé des disponibilités

---

## Stack technique

- **Vue 3** (beta — vapor renderer activé) avec Composition API + `<script setup>`
- **Vite 8** avec `@vitejs/plugin-vue`
- **Tailwind CSS v4**
- **Pinia** — gestion d'état
- **Vue Router 5**
- **VCalendar** — vue calendrier

> Aucun backend. Toutes les données sont des mocks statiques dans `src/data/`. Rien ne persiste entre les rechargements.

---

## Structure du projet

```
/
└── Pawmunity/          ← racine de l'app Vue (tous les scripts se lancent ici)
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── data/       ← données mock (animaux, demandes, profils)
    │   ├── stores/     ← stores Pinia
    │   ├── views/
    │   └── router/
    └── package.json
```

---

## Lancer le projet

**Prérequis :** Node.js `^20.19.0` ou `>=22.12.0`

```bash
cd Pawmunity
npm install
npm run dev
```

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement (Vite) |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualisation du build |
| `npm run lint` | Lint avec oxlint + eslint (auto-fix) |
| `npm run format` | Formatage avec oxfmt |

---

## Design

L'interface est pensée **mobile-first**, avec une charte graphique sobre et chaleureuse.

| Rôle | Couleur |
|---|---|
| Bleu primaire | `#2C4A6E` |
| Orange accent | `#E8724A` / `#FF7A4D` |
| Fond | `#F5F1EB` |

Les demandes urgentes sont signalées par une bordure gauche orange sur leur carte.