## Introduction

- Ce projet s'inscrit dans le cadre de la POEC Testeur logiciel
- Ce porjet a pour objectif d'évaluer nos compétences en tant que Testeur QA

## Pre-requisites
- docker (& docker-compose)

## How to start
- docker-compose up
- Visit http://localhost:8080/

## User story
En tant qu'utilisateur déconnecté, je souhaite pouvoir me connecter à l'application avec Google OAuth et également avec nos identifiants et mot de passe, afin que je puisse accéder à mon compte

## Acceptance criteria
### Acceptance criteria n°1
- Scénario : l'utilisateur a créé un compte avec Google OAuth
- Etant donné que : je suis un utilisateur déconnecté et que je suis sur la page de connexion
- Lorsque : je clique sur le bouton "Continue with Google"
- Alors : la fenêtre "Connexion : comptes Google" apparait

### Acceptance criteria n°2
- Scénario : l'utilisateur a créé un compte via Google OAuth
- Etant donné que : je suis un utilisateur déconnecté et que je suis sur la page de connexion
- Lorsque : je saisis une adresse mail et un mot de passe valides et que je clique sur le bouton "Login"
- Alors : le système me connecte

## Use cases
- Se connecter avec ses identifiants et mot de passe
- Se connecter avec en avec Google OAuth en cliquant sur le bouton "Continue with Google"

## Test cases
<<<<<<< HEAD
### Accès au site
- Cas de test n°1 : Accéder au site
  - Action n°1 : Cliquer sur le lien de connexion au site
    - Resultat attendu : affichage de page d'acceuil
    
### Contrôle d'affichage
- Cas de test n°2 : Contrôler la page de création d'un compte 
  - Action n°1 : Sur la page d'accueil, cliquer sur le bouton "create account"
    - Resultat Attendu : Affichage d'une nouvelle page '/signup'
  - Action n°2 : Contrôler le contenu de la page d'inscription
    - Resultat Attendu :
      - Affichage des champs "full name" , "Email", "Password", "Confirm Password"
      - Affichage d'un bouton "signup" et bouton "continue with Google"

### Connexion au site avec un compte crée via le site
- Cas de test n°8 : Sur la page login, se connecter avec ses identifiants et mot de passe valides 
  - Action n°1 : Sur la page login, renseinger les champs (Email, Password) correct et cliquer sur le bouton login
    - Resultat attendu : Redirection vers la page d'accueil avec l'affichage dans la page d'un message 'Success! You are logged in.'

- Cas de test n°9 : Sur la page login, se connecter via le site avec un email au format valide qui n'existe pas dans la base de données
  - Action n°1 : Sur la page login, taper un email qui n'existe et un mot de passe quelconque
    - Resultat attendu : Affichage dans la page d'un message d'erreur 'email (email renseigné) not found"
  
- Cas de test n°10 : Sur la page login, se connecter via le site avec un email au format invalide (tous les cas d'email invalide)
  - Action n°1 : Sur la page login, Taper un email au format invalide
    - Resultat attendu : Affichage sous forme de pop-up à côté du champ "Email" d'un message d'un message d'erreur 
    
- Cas de test n°11 : Sur la page login, se connecter via le site avec un email correct et un password incorrect 
  - Action n°1 : Sur la page login, taper un email correct et un password incorrect
    - Resultat attendu : Affichage dans la page de messsage d'erreur "Invalid email or password"

- Cas de test n°12 : Sur la page login, se connecter via le site avec un email incorrect et un password correct
  - Action n°1 : Sur la page login, taper un email incorrect et un password correct
        - Resultat attendu : Message d'erreur "Invalid email or password"


### Connexion au site avec un compte crée Google OAuth
- Cas de test n°13 : se connecter avec ses identifiants et mot de passe valides 
  - Action n°1 : Sur la page login, clique sur le bouton "Continue with Google"
 - Resultat attendu : Affichage d'une autre page pour saisir l'email et le mot de passe de Google Oauth
  - Action n°2 : Entrer des identifiants Google valides 
    - Résultat attendu : Disparition de la fenêtre d'authentification Google et redirection vers la page d'accueil avec un message 'Success! You are logged in.' 





- Cas de test n°6 : cliquer sur le lien 'forgot your password'
  - Resultat attendu : Affichage d'un nouveau page'/forgot'

- Cas de test n°7 : cliquer sur le bouton 'sign out' 
  - Resultat attendu :' suscces de sign out'
=======
Cas de test1:Accéder au site
Cliquer sur le lien de connexion au site
Resultat attendu: affichage de page d'acceuil
cas de test2:Créer un compte via le site
-Action1:Cliquer sur le bouton "create account"=>Resultat Attendu : Affichage d'un nouveau page 'signup'
-Action2:Contrôler le contenu de la page d'inscription=>Resultat Attendu :-Affichage full name ,Email,Password,Confirm Password
                                                                  -Affichage d'un bouton signup
-Cas de test 3:Remplir le Formulaire d'inscription
Action1:Renseigner les champs(full name ,Email,Password,Confirm Password) avec des format valide et puis cliquer sur le bouton 'signup' => Resultat attendu:redirection au page '/Account'
Action2:Cliquer sur le bouton Signup sans renseigner de champs =>Resultat attendu:Affichage d'un message veuillez renseigner ce champ
-Action3:entrer un format de mail invalide=>Resultat attendu:Message d'erreur
-Action4:Entrer un password d'une longueur inferieure a 8 caracteres=>Resultat attendu:Message d'erreur
-Cas de test4:
creer un compte avec Google OAuth
-Action1:Cliquer sur le bouton "create account"=>Resultat Attendu : Affichage  d'une option "continuer with google"
-Action2:Cliquer sur l'option "Continuer with google"=>Resultat attendu:Affichage d'une autre page pour saisir l'email et le mot de passe de google Oauth 
-Action3:
-cas de test5:se connecter avec ses identifiants et mot de passe avec compte créer via le site
Action1:Renseinger les champs (Email, Password) correct et cliquer sur le bouton login => Resultat attendu:Affichage d'un message' Success! You are logged in.'
Action2:taper un email qui n'existe pas a la base =>Resultat attendu:affichage d'un message d'erreur 'email not found'
Action3:Taper un email de format invalide=> Resultat attendu :affichage  d'un message d'erreur 'Please enter a valid email address'
Action4:taper un email correct et un password incorrect=>Resultat attendu: Message d'erreur
Action5:taper un email incorrect et un password correct=>Resultat attendu: Message d'erreur
-cas de test6:
- cliquer sur le lien 'forgot your password'=>Resultat attendu: Affichage d'un nouveau page'/forgot'
-Cas de test7:-cliquer sur le bouton 'sign out' =< Resultat attendu:' suscces de sign out'
-Cas de test8: Se connecter avec Google OAuth avec compte créer via le site
Action1:cliquer sur le bouton 'continuer with google' =>Resultat attendu:'Affichage d'un message' Success! You are logged in.'
 
>>>>>>> b165f69 (merge ok)
