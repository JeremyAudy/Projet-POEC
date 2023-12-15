describe('login page exist', () => { //Vérifie que la page de connexion existe bien
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('a[href="/login"]').click()
    cy.get('h3').invoke('text').should('eq', 'Sign in')
    cy.get('input[id="email"]').should('be.visible')
    cy.get('input[id="password"]').should('be.visible')
  })
})

describe('create account', () => { //Créer le compte qui sers de base au tests
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('a[href="/signup"]').click()
    cy.get('input[id="fullname"]').type("Testeur QA")
    cy.get('input[id="email"]').type("test.cypress@example.com")
    cy.get('input[id="password"]').type("test!0!test")
    cy.get('input[id="confirmPassword"]').type("test!0!test")
    cy.get('button[class="btn btn-success"]').click()
    cy.get('a[href="/account"').invoke('text').should('eq', 'My Account')
  })
})

describe('connect account', () => { //Connexion avec le compte créé
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('a[href="/login"]').click()
    cy.get('input[id="email"]').type("test.cypress@example.com")
    cy.get('input[id="password"]').type("test!0!test")
    cy.get('button[class="col-md-3 btn btn-primary"]').click()
    cy.get('div[class="alert alert-success alert-dismissible"').invoke('text').should('eq', 'Success! You are logged in.')
  })
})

describe('connect account wrong email', () => { // Ce connecter avec un email non existant dans la base de donnée
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('a[href="/login"]').click()
    cy.get('input[id="email"]').type("wrong.email@example.com")
    cy.get('input[id="password"]').type("test!0!test")
    cy.get('button[class="col-md-3 btn btn-primary"]').click()
    cy.get('div[class="alert alert-danger alert-dismissible"').invoke('text').should('eq', 'Email wrong.email@example.com not found.')
  })
})

describe('connect account wrong password', () => { // Ce connecter avec une bonne adresse mail mais un mauvais mot de passe
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('a[href="/login"]').click()
    cy.get('input[id="email"]').type("test.cypress@example.com")
    cy.get('input[id="password"]').type("azertyuiop")
    cy.get('button[class="col-md-3 btn btn-primary"]').click()
    cy.get('div[class="alert alert-danger alert-dismissible"').invoke('text').should('eq', 'Invalid email or password.')
  })
})

describe('delete account', () => { //Supression du compte de test
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('a[href="/login"]').click()
    cy.get('input[id="email"]').type("test.cypress@example.com")
    cy.get('input[id="password"]').type("test!0!test")
    cy.get('button[class="col-md-3 btn btn-primary"]').click()
    cy.get('a[href="/account"]').click()
    cy.get('button[class="btn btn-danger"]').click()
  })
})
