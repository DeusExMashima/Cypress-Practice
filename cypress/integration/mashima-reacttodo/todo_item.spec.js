/// <reference types="cypress" />

describe("Todo Item", ()=> {
    it("should be clicked", ()=> {
        cy.visit("https://mashima-reacttodo.netlify.app/")
        cy.get("input.MuiInputBase-input").type("Learn Cypress")
        cy.get("label.MuiFormLabel-root").click() //command chanining
    })
})