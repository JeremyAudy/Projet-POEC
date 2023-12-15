## Introduction

- Ce projet s'inscrit dans le cadre de la POEC Testeur logiciel
- Ce projet a pour objectif d'évaluer nos compétences en tant que Testeur QA

## Pre-requisites
- docker (& docker-compose)

## How to start
- docker-compose up
- Visit http://localhost:8080/

## User story
En tant qu'utilisateur déconnecté, je souhaite pouvoir me connecter à l'application avec Google OAuth et également avec un identifiant et mot de passe, afin que je puisse accéder à mon compte

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

### Connexion au site avec un compte crée via le site
- Cas de test n°1 : Sur la page login, se connecter avec ses identifiants et mot de passe valides 
  - Action n°1 : Sur la page login, renseigner les champs (Email, Password) correct et cliquer sur le bouton login
    - Resultat attendu : Redirection vers la page d'accueil avec l'affichage dans la page d'un message 'Success! You are logged in.'

- Cas de test n°2 : Sur la page login, se connecter via le site avec un email au format valide qui n'existe pas dans la base de données
  - Action n°1 : Sur la page login, taper un email qui n'existe et un mot de passe quelconque
    - Resultat attendu : Affichage dans la page d'un message d'erreur 'email (email renseigné) not found"
  
- Cas de test n°3 : Sur la page login, se connecter via le site avec un email au format invalide (tous les cas d'email invalide)
  - Action n°1 : Sur la page login, Taper un email au format invalide
    - Resultat attendu : Affichage sous forme de pop-up à côté du champ "Email" d'un message d'un message d'erreur 
    
- Cas de test n°4 : Sur la page login, se connecter via le site avec un email correct et un password incorrect 
  - Action n°1 : Sur la page login, taper un email correct et un password incorrect
    - Resultat attendu : Affichage dans la page de messsage d'erreur "Invalid email or password"

- Cas de test n°5 : Sur la page login, se connecter via le site avec un email incorrect et un password correct
  - Action n°1 : Sur la page login, taper un email incorrect et un password correct
        - Resultat attendu : Message d'erreur "Invalid email or password"


### Connexion au site avec un compte crée Google OAuth
- Cas de test n°6 : se connecter avec des identifiants et mot de passe valides 
  - Action n°1 : Sur la page login, clique sur le bouton "Continue with Google"
 - Resultat attendu : Affichage d'une autre page pour saisir l'email et le mot de passe de Google Oauth
  - Action n°2 : Entrer des identifiants Google valides 
    - Résultat attendu : Disparition de la fenêtre d'authentification Google et redirection vers la page d'accueil avec un message 'Success! You are logged in.' 





- Cas de test n°7 : cliquer sur le lien 'forgot your password'
  - Resultat attendu : Affichage d'une nouvelle page'/forgot'

- Cas de test n°8 : cliquer sur le bouton 'sign out' 
  - Resultat attendu :' suscces de sign out'