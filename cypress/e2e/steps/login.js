import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage'

Given("the browser is at login page", () => {
    cy.visit("/login");
});

Given("the user is logged in", () => {
    cy.visit("/login");
    loginPage.submitLogin("admin", "admin123", "Main Branch");
});

When("I logged in with the following details:", (dataTable) => {
    let username = dataTable.rowsHash()['Username'];
    let password = dataTable.rowsHash()['Password'];
    let branch = dataTable.rowsHash()['Branch'];

    loginPage.submitLogin(username, password, branch);
});

Then("I am successfully logged in", () => {
    cy.url({ decode: true }).should('contain', '/home');
});

Then("the login failed", () => {
    loginPage.verifyLoginFailed();
});

Then("the login failed with the error message {string}", (errMsg) => {
    loginPage.verifyLoginFailed(errMsg);
});