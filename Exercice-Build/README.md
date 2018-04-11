# Exercice Build

## Principe

Ecrire un script de build dans le style de votre choix (synchrone, asynchrone, promise, async/await)

## Avant de commencer

* Installer les dépendances : `npm install`
* Pour démarrer le serveur de dev : `npm run serve:dev`
* Pour builder : `npm run build`
* Pour démarrer le serveur de prod (fichiers buildés) : `npm run serve:prod`


## Etapes

### 1 - Supprimer le dossier dist (s'il existe)

Vous pouvez utiliser `del` [https://github.com/sindresorhus/del](https://github.com/sindresorhus/del) ou la méthode `remove` de `fs-extra`

### 2 - Créer le dossier dist

Vous pouvez utiliser la méthode `mkdir` de `fs-extra`

### 3 - Builder le JS

Copier le contenu des fichiers `src/js/horloge.js` et `src/js/index.js` dans un fichier `dist/app.js`, dans cet ordre.


### 4 - Builder le HTML

Copier le fichier `src/index.html` dans `dist/index.html` en remplaçant les balises script de dev par celle de prod (`app.js`).

Indication : readFile retourne un type `Buffer`, pour le convertir en `string` : `buffer.toString()`

### 5 - Minifier le JS (Optionnel)

Utiliser la bibliothèque uglify-es pour réduire le poids du fichier js de prod : [https://www.npmjs.com/package/uglify-es#api-reference](https://www.npmjs.com/package/uglify-es#api-reference)

### 5 - Renommer le fichier JS (Optionnel)

Utiliser le module md5 pour signer le fichier `app.js` et remplacer son nom par le checksum md5 (pour invalider le cache), exemple : `app.5da8aa7126701c9840f99f8e9fa54976.js`
