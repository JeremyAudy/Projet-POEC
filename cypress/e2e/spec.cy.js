describe('create account page exist', () => {
  it ('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('a[href="/signup"]').click()
    cy.get('h3').invoke('text').should('eq', 'Sign up')
  })
})

describe('login page exist', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('a[href="/login"]').click()
    cy.get('h3').invoke('text').should('eq', 'Sign in')
  })
})

describe('create account', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('a[href="/signup"]').click()
    cy.get('input[id="fullname"]').type("Jérémy Audy")
    cy.get('input[id="email"]').type("jeremy.audy@live.fr")
    cy.get('input[id="password"]').type("test!0!test")
    cy.get('input[id="confirmPassword"]').type("test!0!test")
    cy.get('button[class="btn btn-success"]').click()
    cy.get('a[href="/account"').invoke('text').should('eq', 'My Account')
  })
})

describe('connect account', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('a[href="/login"]').click()
    cy.get('input[id="email"]').type("jeremy.audy@live.fr")
    cy.get('input[id="password"]').type("test!0!test")
    cy.get('button[class="col-md-3 btn btn-primary"]').click()
    cy.get('div[class="alert alert-success alert-dismissible"').invoke('text').should('eq', 'Success! You are logged in.')
  })
})