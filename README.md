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
- Lorsque : lorsque je clique sur le bouton "Continue with Google"
- Alors : la fenêtre "Connexion : comptes google" apparait

### Acceptance criteria n°2
- Scénario : l'utilisateur a créé un compte via Google OAuth
- Etant donné que : je suis un utilisateur déconnecté et que je suis sur la page de connexion
- Lorsque : lorsque je saisis une adresse mail et un mot de passe valides et que je clique sur le bouton "Login"
- Alors : le système me connecte

## Use cases
- Accéder au site
- Créer un compte via le site
- Créer un compte par Google OAuth
- Se connecter avec ses identifiants et mot de passe avec compte créer via le site
- Se connecter avec ses identifiants et mot de passe avec compte créer Google OAuth
- Se connecter avec Google OAuth avec compte créer via le site
- Se connecter avec Google OAuth avec compte créer Google OAuth
- Se déconnecter du site

## Test cases
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

### Création de compte
- Cas de test 3 : Créer un compte via le formulaire d'inscription 
  - Action n°1 : Renseigner les champs (full name, Email, Password, Confirm Password) avec des formats valides et puis cliquer sur le bouton 'signup' 
    - Resultat attendu : redirection à la page d'accueil en mode connecté, c'est-à-dire avec les boutons "My Account" et "Sign out"

- Cas de test n°4 : Créer un compte via le formulaire d'inscription sans renseigner de champs
  - Action n°1 : Cliquer sur le bouton "Signup" sans renseigner de champs
    - Resultat attendu : Affichage sous forme de pop-up à côté du champ "Full name" d'un message "veuillez renseigner ce champ" 

- Cas de test n°5 : Créer un compte via le formulaire d'inscription avec un Email au format invalide (tous les cas d'email invalide)
  - Action n°1 : entrer un format de mail invalide
    - Resultat attendu : Affichage sous forme de pop-up à côté du champ "Email" d'un message d'un message d'erreur 
  
- Cas de test n°6 : Créer un compte via le formulaire d'inscription avec un mot de passe de mois de 8 caractères.
  - Action n°1 : Entrer un password d'une longueur inferieure a 8 caracteres
  - Resultat attendu : Affichage dans la page du message d'erreur "Password must be at least 8 characters long"


- Cas de test n°7 : creer un compte avec Google OAuth avec des identifiants valides
  - Action n°1 : Sur la page "/signup", cliquer sur le bouton "create account"
    - Resultat Attendu : Affichage d'une nouvelle page 'signup' avec le bouton "continuer with Google"
  - Action n°2 : Cliquer sur le bouton "Continuer with Google"
    - Resultat attendu : Affichage d'une autre page pour saisir l'email et le mot de passe de Google Oauth
  - Action n°3 : Entrer des identifiants Google valides 
    - Résultat attendu : Affichage de la page d'accueil en mode connecté, c'est-à-dire, avec les boutons "My Account" et "Sign out'" 

### Connexion au site avec un compte crée via le site
- Cas de test n°8 : se connecter avec ses identifiants et mot de passe valides 
  - Action n°1 : Sur la page login, renseinger les champs (Email, Password) correct et cliquer sur le bouton login
    - Resultat attendu : Affichage d'un message 'Success! You are logged in.'

- Cas de test n°9 : Se connecter via le site avec un email qui n'existe pas dans la base de données
  - Action n°1 : Sur la page login, taper un email qui n'existe et un mot de passe quelconque
    - Resultat attendu : Redirection vers la page d'accueil avec un message d'erreur 'email not found'
  
- Cas de test n°10 : Se connecter via le site avec un email au format invalide
  - Action n°1 : Sur la page login, Taper un email au format invalide
    - Resultat attendu : affichage d'un message d'erreur 'Please enter a valid email address'
    
- Cas de test n°11 : Se connecter via le site avec un email correct et un password incorrect
  - Action n°1 : Sur la page login, taper un email correct et un password incorrect
    - Resultat attendu : Message d'erreur "Invalid email or password"

- Cas de test n°12 : Se connecter via le site avec un email incorrect et un password correct
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