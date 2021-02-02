
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I as an Employer', () => {
    cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/LogIn')
    cy.get('#Username').type('TestUser79')
    cy.get('#Password').type('$@olwz|RqoTb')
    cy.get('button[type=submit]').click()
})

When('I select Add Employee', () => {
    cy.get('#add').click()
})

Then('I should be able to enter employee details', () => {
    cy.get('.modal-title').should('be.visible')
})

Then('the employee should save', () => {
    cy.get('#firstName').type('Natasha')
    cy.get('#lastName').type('Romanooff')
    cy.get('#dependants').type('3')
    cy.get('#addEmployee').click()

    cy.get('#add').click()
    cy.get('#firstName').type('Test1')
    cy.get('#lastName').type('Test1')
    cy.get('#dependants').type('1')
    cy.get('#addEmployee').click()
})

Then('the data is saved in the table', () => {
    cy.contains('tr', 'Test1')  // target unique text within children
    cy.contains('tr', 'Test1')
    cy.contains('tr', '1')
})

Then('logout of application', () => {
    cy.get('.nav-item > a').click()
})