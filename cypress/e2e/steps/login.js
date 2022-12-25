import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
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

// Probably move this to tabBar.js
Then("the ClaimCenter desktop should be accessible", () => {
    tabBar.verifyDesktopTabExists();
});