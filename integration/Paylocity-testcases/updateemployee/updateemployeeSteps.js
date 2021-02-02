
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I as an Employer', () => {
    cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/LogIn')
    cy.get('#Username').type('TestUser79')
    cy.get('#Password').type('$@olwz|RqoTb')
    cy.get('button[type=submit]').click()
})

When('I click Edit button', () => {
    cy.contains('tr', 'Test1', 'Test1', '1')
    .find(':nth-child(9) > .fa-edit')       
    .click()
})

Then('I can edit employee details', () => {
    cy.get('#firstName').clear()
    cy.get('#firstName').type('ABC')
    cy.get('#lastName').clear()
    cy.get('#lastName').type('ABC')
    cy.get('#dependants').clear()
    cy.get('#dependants').type('5')
    cy.get('#updateEmployee').click() 
})

Then('the data should be updated in the table', () => {
    cy.contains('tr', 'ABC')  // target unique text within children
    cy.contains('tr', 'ABC')
    cy.contains('tr', '5')
})

Then('logout of application', () => {
    cy.get('.nav-item > a').click()
})