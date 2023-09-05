describe('ECU menu', () => {
    beforeEach(() => {
    
      cy.visit('http://localhost:9001')
      const inputUsername = 'admin'
      const inputPassword = 'Passw0rd!'
     
      cy.get('#login_username').type(`${inputUsername}{enter}`)
      cy.get('#login_password').type(`${inputPassword}{enter}`)
      //cy.get('#login_submit')
    })
  
    it('Polozky na dashboarde', () => {
      
      cy.get('[class*="menu"]').click()
      cy.get('[class="btn-close"]').click()
      // Overi buttony na dasboarde
      cy.get('[class="ecu_button btn btn-primary btn-lg"]').first().should('have.text', 'Vyhľadanie osoby')
      cy.get('[class="ecu_button btn btn-primary btn-lg"]').last().should('have.text', 'EC INFN MPS Report na počet žiadostí podľa účelu')
    })
  
    it('can add new todo items', () => {
      
      const nameLast= 'EC INFN MPS Report na počet žiadostí podľa účelu'
      cy.get('[class*="menu"]').click()
      cy.get('[class="btn-close"]').click()
     // Overi poslednu polozku
      cy.get('[class="ecu_button btn btn-primary btn-lg"]')
        .should('have.length', 3)
        .last()
        .should('have.text', nameLast)
    })
})