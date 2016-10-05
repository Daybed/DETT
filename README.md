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
  
##Annuler le dernier commit (soft)

  - git reset HEAD

##Annuler tous les changements du dernier commit (hard)

   - git reset --hard HEAD

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

  - git fetch
  
##Fusionner les changements d'une branche sur la branche preprod
   
   - Aller sur le répertoire github du projet
   - Cliquer sur "code" (en haut à gauche)
   - Cliquer sur "Branch : nomDuneBranche" et choisir "preprod"
   - Cliquer sur "New pull request"
   - Cliquer sur "Compare : nomDuneBranche" et choisir la branche à fusionner sur preprod
   - Choisir un nom et décrire la fonctionnalité qui va être fusionné à preprod
   - Cliquer sur "Create pull request"
    

  
  
