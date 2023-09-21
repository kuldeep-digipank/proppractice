describe('template spec', () => {
  it('should visit', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(3) > h3').should('have.text','Legal')
  })
  
})
