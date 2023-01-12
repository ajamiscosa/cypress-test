import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage'
import { tabBar } from "@pages/Dashboard";

Given("the browser is at login page", () => {
  cy.visit("/login");
});

When("I logged in with the following details:", (dataTable) => {
    let username = dataTable.rowsHash()['Username'];
    let password = dataTable.rowsHash()['Password'];
    let branch = dataTable.rowsHash()['Branch'];

    cy.log(`>${branch}<`);
    
    // loginPage.typeUsername(username);
    // loginPage.typePassword(password);
    // loginPage.selectBranch(branch);
    // loginPage.clickLogin();
    loginPage.submitLogin(username, password, branch);
});

// Probably move this to tabBar.js
Then("I am successfully logged in", () => {
    cy.url({ decode: true }).should('contain', '/home');
});

Then("the login failed", () => {
    loginPage.verifyLoginFailed();
});