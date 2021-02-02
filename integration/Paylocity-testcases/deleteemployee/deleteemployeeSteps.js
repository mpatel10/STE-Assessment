
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I as an Employer', () => {
    cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/LogIn')
    cy.get('#Username').type('TestUser79')
    cy.get('#Password').type('$@olwz|RqoTb')
    cy.get('button[type=submit]').click()
})

When('I am on the Benefits Dashboard page', () => {
    cy.get('.navbar-brand').should('be.visible')
})

Then('I click Delete icon', () => {
    cy.contains('tr', 'Natasha', 'Romanooff', '3') // target unique text within children
    .find(':nth-child(9) > .fa-times')       
    .click()
    cy.get('.col-sm-12').should('contain', 'Delete employee record for', 'Natasha', 'Romanooff')
    cy.get('#deleteEmployee').click()
})

Then('the table is updated', () => {
    cy.get('main.pb-3').should('not.contain', 'tr', 'Natasha', 'Romanooff', '3')
})

Then('logout of application', () => {
    cy.get('.nav-item > a').click()
})