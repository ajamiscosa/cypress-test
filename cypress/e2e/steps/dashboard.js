import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from '@pages/DashboardPage'

When("I create a new borrower with the following details:", () => {
    dashboardPage.clickNavigationLabel("Borrower");
    dashboardPage.clickSubNavigationLabel("New Borrower");
});
