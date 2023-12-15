## Introduction

- Ce projet s'inscrit dans le cadre de la POEC Testeur logiciel
- Ce projet a pour objectif d'évaluer nos compétences en tant que Testeur QA

## Pre-requisites
- docker (& docker-compose)

## How to start
- docker-compose up
- Visit http://localhost:8080/

## User story
En tant qu'utilisateur, je souhaite pouvoir me connecter à l'application avec Google OAuth et également avec un identifiant et mot de passe, afin que je puisse accéder à mon compte

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
### Use cases principales
- Se connecter avec ses identifiants et mot de passe
- Se connecter avec en avec Google OAuth en cliquant sur le bouton "Continue with Google"

### Use cases secondaires
- Se connecter avec ses identifiants et mot de passe en ayant un compte crée via l'application
- Se connecter avec Google OAuth en ayant un compte créé avec Google OAuth
- Se connecter avec ses identifiants et mot de passe en ayant un compte crée via Google OAuth
- Se connecter avec Google OAuth en ayant un compte créé via l'application (adresse mail Google)

## Test cases correspondant aux use cases secondaires

### Connexion avec ses identifiants et mot de passe en ayant un compte crée via l'application
- Cas de test n°1 : Se connecter avec ses identifiants et mot de passe valides 
  - Action n°1 : Sur la page login, renseigner les champs (Email, Password) correct et cliquer sur le bouton login
    - Résultat attendu : Redirection vers la page d'accueil avec l'affichage dans la page d'un message 'Success! You are logged in.'

- Cas de test n°2 : Se connecter via le site avec un email au format valide qui n'existe pas dans la base de données
  - Action n°1 : Sur la page login, taper un email qui n'existe et un mot de passe quelconque
    - Résultat attendu : Affichage dans la page d'un message d'erreur "email (email renseigné) not found"
  
- Cas de test n°3 : Se connecter via le site avec un email au format invalide (tous les cas d'email invalide)
  - Action n°1 : Sur la page login, Taper un email au format invalide
    - Résultat attendu : Affichage sous forme de pop-up à côté du champ "Email" d'un message d'un message d'erreur 
    
- Cas de test n°4 : Se connecter via le site avec un email correct et un password incorrect 
  - Action n°1 : Sur la page login, taper un email correct et un password incorrect
    - Résultat attendu : Affichage dans la page de messsage d'erreur "Invalid email or password"

- Cas de test n°5 : Se connecter via le site avec un email incorrect et un password correct
  - Action n°1 : Sur la page login, taper un email incorrect et un password correct
        - Résultat attendu : Message d'erreur "Invalid email or password"


### Connexion avec Google OAuth en ayant un compte créé avec Google OAuth
- Cas de test n°6 : se connecter avec des identifiants et mot de passe valides 
  - Action n°1 : Sur la page login, clique sur le bouton "Continue with Google"
 - Résultat attendu : Affichage d'une autre page pour saisir l'email et le mot de passe de Google Oauth
  - Action n°2 : Sur la page login, entrer des identifiants Google valides 
    - Résultat attendu : Disparition de la fenêtre d'authentification Google et redirection vers la page d'accueil avec un message 'Success! You are logged in.' 

### Connexion avec ses identifiants et mot de passe en ayant un compte crée via Google OAuth
- Cas de test n°7 : se connecter avec ses identifiants google 
  - Action n°1 : Sur la page login, renseigner les champs (Email, Password) du compte Google et cliquer sur le bouton login
    - Résultat attendu : Affichage dans la page de messsage d'erreur "Invalid email or password"
  - Action n°2 : Sur la page login, clique sur le bouton "Continue with Google"
    - Résultat attendu : Affichage d'une autre page pour saisir l'email et le mot de passe de Google Oauth
  - Action n°3 : Sur la page login, entrer des identifiants Google valides 
    - Résultat attendu : Disparition de la pop-up d'authentification Google et redirection vers la page d'accueil avec un message 'Success! You are logged in.'
  - Action n°4 : Cliquer sur le bouton "My Account"
    - Résultat attendu : Redirection vers la page "account"
  - Action n°5 : Renseigner dans les champs "New Password" et "Confirm Password" le mot de passe choisi puis cliquer sur le bouton "Change Password"
    - Résultat attendu :Password has been changed.
  - Action n°6 : Renseigner dans les champs "New Password" et "Confirm Password" le mot de passe choisi puis cliquer sur le bouton "Change Password"
    - Résultat attendu : Password has been changed.
 - Action n°7 : Sur la page "account" cliquer sur "Sign out"
    - Résultat attenndu : Déconnexion et redirection vers la page d'accueil.
 - Action n°8 : Sur la page d'accueil, cliquer sur "login" puis renseigner son email Google et le mot de passe précédemment renseigné dans la page "account"
   - Résultat attenndu : Redirection vers la page d'accueil avec l'affichage dans la page d'un message 'Success! You are logged in.'
  
- Cas de test n°8 : se connecter avec une adresse mail différente de l'adresse mail Google qui a été utilisée pour créer le compte sur l'application 
  - Action n°1 : Sur la page login, renseigner les champs (Email, Password) avec des identifiants différents du compte Google
    - Résultat attendu : Affichage dans la page de messsage d'erreur "email (email renseigné) not found"
  - Action n°2 : Sur la page login, clique sur le bouton "Continue with Google"
    - Résultat attendu : Affichage d'une autre page pour saisir l'email et le mot de passe de Google Oauth
  - Action n°3 : Sur la page login, entrer des identifiants Google valides 
    - Résultat attendu : Disparition de la pop-up d'authentification Google et redirection vers la page d'accueil avec un message 'Success! You are logged in.'
  - Action n°4 : Cliquer sur le bouton "My Account"
    - Résultat attendu : Redirection vers la page "account"
  - Action n°5 : Dans la page "account" Renseigner dans les champs "New Password" et "Confirm Password" le mot de passe choisi puis cliquer sur le bouton "Change Password"
    - Résultat attendu : Affichage dans la page du message "Password has been changed".
  - Action n°6 : Sur la page "account" cliquer sur "Sign out"
    - Résultat attenndu : Déconnexion et redirection vers la page d'accueil.
  - Action n°7 : Sur la page d'accueil, cliquer sur "login" puis renseigner son email Google et le mot de passe précédemment renseigné dans la page "account"
    - Résultat attenndu : Redirection vers la page d'accueil avec l'affichage dans la page d'un message 'Success! You are logged in.'
  

### Connexion avec Google OAuth en ayant un compte créé via l'application (adresse mail Google)
- Cas de test n°9 : Se connecter avec Google OAuth avec l'adresse mail Google utilisée pour créer le compte
  - Action n°1 : Cliquer sur "Continue with Google"
    - Résultat attendu : Affichage d'une nouvelle page'/forgot'

- Cas de test n°8 : cliquer sur le bouton 'sign out' 
  - Résultat attendu :' success de sign out'