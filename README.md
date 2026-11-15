# Mes notes

Appli de notes simple : thème clair/sombre, notes épinglées, recherche sans accents, code de verrouillage optionnel. Tout reste sur ton appareil (aucun serveur).

## 1. Mettre sur GitHub et avoir un lien web

1. Crée un dépôt sur GitHub, puis envoie ce dossier :
   ```
   git init
   git add .
   git commit -m "Première version"
   git branch -M main
   git remote add origin https://github.com/TON-NOM/mes-notes.git
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.
3. Après 1 à 2 minutes, l'appli est sur `https://TON-NOM.github.io/mes-notes/`.

**Sur ton Samsung :** ouvre ce lien dans Chrome ou Samsung Internet, menu ⋮ → **Ajouter à l'écran d'accueil** (ou « Installer l'application »). Elle s'ouvre ensuite plein écran, avec son icône, même sans connexion.

## 2. Obtenir le .exe

**Sans rien installer (recommandé) :** crée une version, GitHub construit le .exe tout seul.
```
git tag v1.0.0
git push --tags
```
Le .exe (installateur et version portable) apparaît dans l'onglet **Releases** du dépôt après quelques minutes. Pour le relancer à la main : onglet **Actions → Créer le .exe → Run workflow**, le fichier est alors dans les « Artifacts ».

**Sur ton PC Windows :** installe [Node.js](https://nodejs.org), puis dans ce dossier :
```
npm install
npm run dist
```
Les fichiers sont créés dans `dist/`. Pour tester sans construire : `npm start`.

Windows peut afficher « Windows a protégé votre PC » car le .exe n'est pas signé : clique sur **Informations complémentaires → Exécuter quand même**.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | l'appli |
| `manifest.webmanifest`, `sw.js`, `icons/` | installation sur téléphone et mode hors connexion |
| `electron/main.js`, `package.json`, `build/` | version Windows (.exe) |
| `.github/workflows/` | publication automatique du site et du .exe |

## À savoir

- Les notes sont stockées dans le navigateur ou l'appli où tu les écris : la version web, celle du téléphone et le .exe ont chacune leurs propres notes.
- Quand tu modifies l'appli, change `VERSION` dans `sw.js` (par exemple `notes-v2`) pour que les téléphones prennent la nouvelle version.
- Pour changer le nom de l'auteur ou du .exe, modifie `package.json`.
