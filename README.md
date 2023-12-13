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
- Cas de test n°1 : Accéder au site
  - Action n°1 : Cliquer sur le lien de connexion au site
    - Resultat attendu : affichage de page d'acceuil
    

- Cas de test n°2 : Contrôler la page de création d'un compte 
  - Action n°1 : Sur la page d'accueil, cliquer sur le bouton "create account"
    - Resultat Attendu : Affichage d'une nouvelle page '/signup'
  - Action n°2 : Contrôler le contenu de la page d'inscription
    - Resultat Attendu :
      - Affichage full name , Email, Password, Confirm Password
      - Affichage d'un bouton signup et bouton "continue with Google"



- Cas de test 3 : Créer un compte via le formulaire d'inscription
  - Action n°1 : Renseigner les champs (full name, Email, Password, Confirm Password) avec des formats valides et puis cliquer sur le bouton 'signup' 
    - Resultat attendu : redirection à la page d'accueil en mode connecté, c'est-à-dire avec les bouton "My Account" et "Sign out"

- Cas de test n°4 : Créer un compte via le formulaire d'inscription sans renseigner de champs
  - Action n°1 : 
    - Resultat attendu : Affichage d'un message "veuillez renseigner ce champ"
    - Action n°3 : entrer un format de mail invalide
      - Resultat attendu : Message d'erreur
    - Action n°4 : Entrer un password d'une longueur inferieure a 8 caracteres
    - Resultat attendu : Message d'erreur


- Cas de test n°4 : creer un compte avec Google OAuth
  - Action n°1 : Cliquer sur le bouton "create account"
    - Resultat Attendu : Affichage d'une nouvelle page 'signup' avec le bouton "continuer with Google"
  - Action n°2 : Cliquer sur le bouton "Continuer with Google"
    - Resultat attendu : Affichage d'une autre page pour saisir l'email et le mot de passe de Google Oauth
  - Action n°3 : Entrer des identifiants Google valides 
    - Résultat attendu : Affichage de la page d'accueil en mode connecté, c'est-à-dire, avec les boutons "My Account" et "Sign out'" 

- Cas de test n°5 : se connecter avec ses identifiants et mot de passe avec un compte créer via le site
  - Action n°1 : Renseinger les champs (Email, Password) correct et cliquer sur le bouton login
    - Resultat attendu : Affichage d'un message 'Success! You are logged in.'
  - Action n°2 : taper un email qui n'existe pas a la base 
    - Resultat attendu : affichage d'un message d'erreur 'email not found'
  - Action n°3 : Taper un email de format invalide
    - Resultat attendu : affichage d'un message d'erreur 'Please enter a valid email address'
  - Action n°4 : taper un email correct et un password incorrect
    - Resultat attendu : Message d'erreur
  - Action n°5 : taper un email incorrect et un password correct
    - Resultat attendu : Message d'erreur


- Cas de test n°6 : cliquer sur le lien 'forgot your password'
  - Resultat attendu : Affichage d'un nouveau page'/forgot'

- Cas de test n°7 : cliquer sur le bouton 'sign out' 
  - Resultat attendu :' suscces de sign out'