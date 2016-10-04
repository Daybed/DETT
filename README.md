# DETT
Digital Esir Time Table

Lien : https://github.com/Daybed/DETT.git

##Créer un nouveau dépôt
  - git init
  
##Cloner un dépôt existant
  - git init %URL%
  
##Récupérer le dépôt
  - git clone %URL%

##Modifier le code et effectuer des commits
  1. Indiquer les fichiers que vous avez modifié
    - git status
  2. Voir ce que vous avez changé
    - git diff
  3. Faire un commit
    - git add nomfichier1 nomfichier2
    - git commit -m "message définissant la tâche de la fonction développée"
    - git status après git add permet de voir la liste des fichiers du commit
    
##Annuler un commit effectué par erreur
  1. Voir ses commits
    - git log -p pour avoir les détails
  2. Modifier le dernier message de commit
    - git commit --amend
  3. Annuler le dernier commit (soft)
    - git reset HEAD
  4. Annuler tous les changements du dernier commit (hard)
    - git reset --hard HEAD
  5. Annuler les modifications d'un fichier avant un commit
    - git checkout nomfichier
  6. Annuler / supprimer un fichier avant un commit
    - git reset HEAD -- fichier_a_supprimer
    
##Télécharger les nouveautés et partager votre travail
  1. Télécharger les nouveautés
    - git pull
