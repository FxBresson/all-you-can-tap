
# All you can tap

[Consignes de l'évaluation](#%20All%20you%20can%20tap%20%20link%5Bhttps://www.evernote.com/shard/s437/client/snv?noteGuid=9b8440b5-356e-4c4a-b251-72e908f4e7bc&noteKey=eb9b716ae85268a3&sn=https://www.evernote.com/shard/s437/sh/9b8440b5-356e-4c4a-b251-72e908f4e7bc/eb9b716ae85268a3&title=Evaluation%2bMEAN%2b2017-2018%5D)

## Comment lancer le projet
**Pré-requis:** 
- Faire tourner une instance de MongoDB sur la machine
- `$ npm i` dans le dossier du projet
- `$ npm i` dans le dossier `ANGclient`

**Commandes disponibles :** 

 - `npm start` pour build l'application et lancer le serveur 
 - `npm run
   build` pour build l'application  
   `npm run dev` pour lancer le serveur
   avec un live reload

## Structure du projet

Projet basé sur le un boilerplate Angular / API fourni par [DWS-paris](https://github.com/DWS-paris)

### Fonctionnalités ajoutées au boilerplate : 

#### API
- `logout` route pour supprimer le cookie

#### Application Angular 
- `RequesterService` donnant une base pour les requêtes GET, POST et PATCH
- `UserStore` permettant de gérer le "state" utilisateur sur l'ensemble de l'application


## TODO: 

- [ ] Style
- [ ] Comments
- [ ] Fix performance issue on button, where front downloads image at each display