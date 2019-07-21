
## Procédure d'installation

### Prérequis

Vous devez avoir `nodejs` (https://nodejs.org/fr/download/) installé sur votre machine. Il vous faudra également l'un des deux package manager suivant : `yarn` ou `npm`.

### Installation

- Installer les dépendences : `npm install` (ou `yarn install`)

### Lancement

Le projet a été créé à l'aide de **Create React App**.

- Lancer le projet : `yarn start` (ou `npm start`)

L'application est lancée en mode développement.<br>
Ouvrir [http://localhost:3000](http://localhost:3000) pour visualiser l'application dans le navigateur.
La page se recharge à chaque modification.

### Lancer les tests unitaires

- `yarn test` (ou `npm test`)

Lance le gestionnaire de tests en mode interactif.

## Consignes

Le projet affiche un calendrier.

On peut afficher le calendrier dans 4 mode :

- Jours
- Semaine (par défaut)
- Mois
- Agenda (affiche tous les évents)

On peut choisir la date à afficher avec le datePicker.

La date s'affichera en fonction du mode sélectionné.

On peut choisir un user, actuellement, il y en a deux : Nicolas & Kevin

On peut afficher les rendez d'un user en le sélectionnant.

Les plages horaires sont de 1 h 30.

Pour créer un événement, cliqué sur une case ou glisser le curseur le long d'une plage horaire.

Remplir le formulaire. La seule condition et que l'on doit sélectionner un user.

Plusieurs évènements peuvent s'afficher sur la même plage horaire.

Cliquer sur un évènement pour voir ces détails s'afficher.

On peut modifier ou supprimer un évènement.

## Technique

reactjs + redux

### Dépendances principales


react-big-calendar - Composant principal de calendrier.


@material-ui       - Ui kit pour react. 


redux-thunk        - redux asynchrone


react-router-dom   - router


eslint             - lint

## Autres 

src/api/userEvent.js    		contient les variables qui remplacent les data d'une api.  

src/actions/userEvents.js 		contient toutes les actions. 

src/reducers/main.reducers 		reducers + state initial.

src/composants/					composants fonction pur. 

src/containers/                 composants class react.  
