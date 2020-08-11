/// <reference types="cypress" />

describe("Form Testing", ()=> {
    it("should be able to add a new task to the todo-list", ()=> {
        cy.visit("https://mashima-reacttodo.netlify.app/")
        cy.get("input.MuiInputBase-input").type("Learn Cypress") //command chanining
        cy.get("button.MuiButton-containedPrimary").click()
    })
})