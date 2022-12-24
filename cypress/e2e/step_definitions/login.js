import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage'
import { tabBar } from "@pages/TabBar";

Given("the browser is at ClaimCenter login page", () => {
  cy.visit("ClaimCenter.do");
});

When("I logged in as {string}", (username) => {
    loginPage.typeUsername(username);
    loginPage.typePassword("gw");
    loginPage.clickLogin();
});

Then("the ClaimCenter desktop should be accessible", () => {
    tabBar.verifyDesktopTabExists();
});



// When("A user provides incorrect credentials, and clicks on the login button", (table) => {
//   table.hashes().forEach((row) => {
//     cy.log(row.username);
//     cy.log(row.password);
//     loginPage.submitLogin(row.username, row.password)

//   });
// });
// Then("the url will contains the inventory subdirectory", () => {
//   cy.url().should("contains", "/inventory.html");
// });
// Then("The error message {string} is displayed", (errorMessage) => {
//   loginPage.elements.errorMessage().should("have.text", errorMessage);
// });
