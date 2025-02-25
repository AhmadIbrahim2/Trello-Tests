// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginToTrello",()=>{
    cy.visit("/login")
    cy.fixture("login").then((data)=>{
        cy.get("#username").type(data.email)
        cy.get("#login-submit").click()
        cy.get("#password").type(data.password)
    })
    cy.get("#login-submit").click()
});

Cypress.Commands.add("findByTestId",(testId)=>{
    cy.get(`[data-testid=${testId}]`)
});