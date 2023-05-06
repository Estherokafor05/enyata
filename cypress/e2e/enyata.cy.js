describe('login', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('.css-6kc43q').should('contain', 'Tutor Login Portal')
    cy.get('[data-testid="email"]').type('google@gmail.com')
    cy.get('#field-2').type('Bible@123')
    cy.get('[data-testid="submit"]').click()
    cy.wait(2000)
    cy.get('.css-70qvj9').should('be.exist')
    cy.contains('Overview').should('be.exist')
    cy.contains('Courses').should('be.exist')
    cy.contains('Group').should('be.exist')
    cy.contains('Settings').should('be.exist')
    
  })
})