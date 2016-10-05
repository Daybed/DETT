# DETT
Digital Esir Time Table

##Récupérer le dépôt

  - se placer à l'endroit où vous voulez copier le projet
  - git clone https://github.com/Daybed/DETT.git

##Obtenir une aide pour les commandes git

  - git help

##Modifier le code et effectuer des commits en local

  - git add nomDuFichierModifié1 nomDuFichierModifié2
  - git commit -m "message définissant la tâche de la fonction développée"
    
##Envoyer les commits locaux d'une branche sur la branche distante (en ligne)
  
  - git push
    
##Voir les fichiers que vous avez modifié

  - git status
    
##Voir le code que vous avez changé

  - git diff
    
##Voir ses commits (locaux)

  - git log -p pour avoir les détails
  
##Modifier le dernier message de commit

  - git commit --amend
  
##Revenir à un ancien commit

  - git reset --soft

##Revenir à un ancien commit et supprimer le dernier 

  - git reset --hard

##Annuler les modifications d'un fichier avant un commit
   
   - git checkout nomfichier
    
##Télécharger les nouveautés d'une branche

  - git pull

##Mettre de côté un travail en cours avant de changer de branche ou de travailler sur autre chose
   
   - git stash
  
##Récupérer le travail mis de côté

   - git stash apply ou ...
   - git stash pop

##Voir toutes vos branches
  
  - git branch

##Créer une branche en local
   
   - git checkout preprod
   - git pull
   - git branch nouvelleBranche

##Ajouter la branche locale sur le serveur git

  - git push --set-upstream origin/preprod nomdelabranche
  
##Changer de branche

   - git checkout nomDeLaBranche

##Mettre à jour les branches locales (récupérer les branches du serveur git)

  - git fetch : Télécharge en local les branches que vous n'aviez pas encore, ne supprime pas en local les branches qui ont été supprimées sur le serveur git
  
##Supprimer une branche sur le repo git

  - Cliquer sur "code" (en haut à gauche)
  - Cliquer sur "branches"
  - Supprimer la branche avec le bouton (la branche sera toujours présente en locale sur votre pc)

##Supprimer une branche en local qui n'existe plus en distant

  - git branch -d "nomDeLaBranche"
  
##Fusionner les changements d'une branche sur la branche preprod
   
   - Aller sur le répertoire github du projet
   - Cliquer sur "code" (en haut à gauche)
   - Cliquer sur "Branch : nomDuneBranche" et choisir "preprod"
   - Cliquer sur "New pull request"
   - Cliquer sur "Compare : nomDuneBranche" et choisir la branche à fusionner sur preprod
   - Choisir un nom et décrire la fonctionnalité qui va être fusionné à preprod
   - Cliquer sur "Create pull request"
   - Quelqu'un pourra ensuite regarde le code, le commenter, montrer ou il y a des erreurs etc... Cette personne devra ensuite valider ou refuser la pull request
   - Une fois la pull request accepté, cliqué sur la pull request et cliquer sur "merge pull request"

##Sélectionner un commit et l'appliquer à la branche courante

  - git cherry pick

##Revenir à un ancien commit existant

  - git revert

##Changer la base d'une branche

  - git rebase
  
