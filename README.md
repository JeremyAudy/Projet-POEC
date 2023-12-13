## Introduction
- Ce projet s'inscrit dans le cadre de la POEC Testeur logiciel
- Ce porjet a pour objectif d'évaluer nos compétences en tant que Testeur QA

## Pre-requisites
- docker (& docker-compose)

## How to start
- docker-compose up
- Visit http://localhost:8080/

## Use cases
- Accéder au site
- Créer un compte via le site
- Créer un compte par Google OAuth
- Se connecter avec ses identifiants et mot de passe avec compte créer via le site
- Se connecter avec ses identifiants et mot de passe avec compte créer Google OAuth
- Se connecter avec Google OAuth avec compte créer via le site
- Se connecter avec Google OAuth avec compte créer Google OAuth

## Test cases
Cas de test1:Accéder au site
Cliquer sur le lien de connexion au site
Resultat attendu: affichage de page d'acceuil
cas de test2:Créer un compte via le site
- Action1:Cliquer sur le bouton "create account"=>Resultat Attendu : Affichage d'un nouveau page 'signup'
- Action2:Contrôler le contenu de la page d'inscription=>Resultat Attendu :-Affichage full name ,Email,Password,Confirm Password
                                                                  -Affichage d'un bouton signup
-Cas de test 3:
-Renseigner les champs(full name ,Email,Password,Confirm Password) avec des format valide et puis cliquer sur le bouton 'signup' => Resultat attendu:redirection au page '/Account'
-Cliquer sur le bouton Signup sans renseigner de champs =>Resultat attendu:Affichage d'un message veuillez renseigner ce champ
-Action2:
-entrer un format de mail invalide=>Resultat attendu:Message d'erreur
-Cas de test4:
creer un compte avec Google OAuth
-Action1:Cliquer sur le bouton "create account"=>Resultat Attendu : Affichage  d'une option "continuer with google"
-Action2:Cliquer sur l'option "Continuer with google"=>Resultat attendu:Affichage d'une autre page pour saisir l'email et le mot de passe de google Oauth
-cas de test5:se connecter avec ses identifiants et mot de passe avec compte créer via le site
Action1:Renseinger les champs (Email, Password) correct et cliquer sur le bouton login => Resultat attendu:Affichage d'un message' Success! You are logged in.'
Action2:taper un email qui n'existe pas a la base =>Resultat attendu:affichage d'un message d'erreur 'email not found'
Action3:Taper un email de format invalide=> Resultat attendu :affichage  d'un message d'erreur 'Please enter a valid email address'
Action4:taper un email correct et un password incorrect=>Resultat attendu: Message d'erreur
Action5:taper un email incorrect et un password correct=>Resultat attendu: Message d'erreur
-cas de test6:
- cliquer sur le lien 'forgot your password'=>Resultat attendu: Affichage d'un nouveau page'/forgot'
-Cas de test7: Se connecter avec Google OAuth avec compte créer via le site
Action1:cliquer sur le bouton 'continuer with google' =>Resultat attendu:'Affichage d'un message' Success! You are logged in.'
-Cas de test8:-cliquer sur le bouton 'sign out' =< Resultat attendu:' suscces de sign out'