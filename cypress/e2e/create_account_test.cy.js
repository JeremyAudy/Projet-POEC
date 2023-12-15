describe('create account page exist', () => {
    it ('passes', () => {
      cy.visit('http://localhost:8080/')
      cy.get('a[href="/signup"]').click()
      cy.get('h3').invoke('text').should('eq', 'Sign up')
      cy.get('input[id="fullname"]').type("Jérémy Audy")
      cy.get('input[id="email"]').should('be.visible')
      cy.get('input[id="password"]').should('be.visible')
      cy.get('input[id="confirmPassword"]').should('be.visible')
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
  
  describe('create account no fullname', () => {
    it('passes', () => {
      // Essayer de crée un compte sans nom 
      cy.visit('http://localhost:8080/')
      cy.get('a[href="/signup"]').click()
      cy.get('input[id="email"]').type("jeremy.audy@live.fr")
      cy.get('input[id="password"]').type("test!0!test")
      cy.get('input[id="confirmPassword"]').type("test!0!test")
      cy.get('button[class="btn btn-success"]').click()
      //cy.contains('Veuillez renseigner ce champ.').should('exist')   
    })
  })
  
  describe('create account wrong email without @', () => {
    it('passes', () => {
      cy.visit('http://localhost:8080/')
      cy.get('a[href="/signup"]').click()
      cy.get('input[id="fullname"]').type("Jérémy Audy")
      cy.get('input[id="email"]').type("azertyuiop")
      cy.get('input[id="password"]').type("test!0!test")
      cy.get('input[id="confirmPassword"]').type("test!0!test")
      cy.get('button[class="btn btn-success"]').click()
      //cy.contains('Veuillez inclure "@" dans l\'adresse e-mail. Il manque un symbole "@" dans "azertyuiop".').should('exist')   
    })
  })
  
  describe('create account wrong email with @', () => {
    it('passes', () => {
      cy.visit('http://localhost:8080/')
      cy.get('a[href="/signup"]').click()
      cy.get('input[id="fullname"]').type("Jérémy Audy")
      cy.get('input[id="email"]').type("azertyuiop@ezjbf")
      cy.get('input[id="password"]').type("test!0!test")
      cy.get('input[id="confirmPassword"]').type("test!0!test")
      cy.get('button[class="btn btn-success"]').click()
      cy.get('div[class="alert alert-danger alert-dismissible"').invoke('text').should('eq', 'Please enter a valid email address.')
    })
  })
  
  describe('create account no password', () => {
    it('passes', () => {
      cy.visit('http://localhost:8080/')
      cy.get('a[href="/signup"]').click()
      cy.get('input[id="fullname"]').type("Jérémy Audy")
      cy.get('input[id="email"]').type("jeremy.audy@live.fr")
      cy.get('button[class="btn btn-success"]').click()
    })
  })
  
  describe('create account too short password', () => {
    it('passes', () => {
      cy.visit('http://localhost:8080/')
      cy.get('a[href="/signup"]').click()
      cy.get('input[id="fullname"]').type("Jérémy Audy")
      cy.get('input[id="email"]').type("jeremy.audy@live.fr")
      cy.get('input[id="password"]').type("test!0!")
      cy.get('input[id="confirmPassword"]').type("test!0!")
      cy.get('button[class="btn btn-success"]').click()    
      cy.get('div[class="alert alert-danger alert-dismissible"').invoke('text').should('eq', 'Password must be at least 8 characters long')
    })
  })
  
  describe('create account confirmation and password dont match', () => {
    it('passes', () => {
      cy.visit('http://localhost:8080/')
      cy.get('a[href="/signup"]').click()
      cy.get('input[id="fullname"]').type("Jérémy Audy")
      cy.get('input[id="email"]').type("jeremy.audy@live.fr")
      cy.get('input[id="password"]').type("test!0!test")
      cy.get('input[id="confirmPassword"]').type("test!0!QA")
      cy.get('button[class="btn btn-success"]').click()
  
    })
  })

  describe('delete account', () => {
    it('passes', () => {
      cy.visit('http://localhost:8080/')
      cy.get('a[href="/login"]').click()
      cy.get('input[id="email"]').type("jeremy.audy@live.fr")
      cy.get('input[id="password"]').type("test!0!test")
      cy.get('button[class="col-md-3 btn btn-primary"]').click()
      cy.get('a[href="/account"]').click()
      cy.get('button[class="btn btn-danger"]').click()
    })
  })