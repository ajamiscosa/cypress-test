import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { newBorrowerPage } from '@pages/NewBorrowerPage'
import { dashboardPage } from '@pages/DashboardPage'

When("I create a new borrower with the following details:", (dataTable) => {
    let values = dataTable.rowsHash();

    dashboardPage.clickNavigationLabel("Borrower");
    dashboardPage.clickSubNavigationLabel("New Borrower");

    newBorrowerPage.navigateToTab("Personal Information");
    newBorrowerPage.setPersonalInformation(values);

    newBorrowerPage.navigateToTab("Password");
    newBorrowerPage.setDefaultPasswordValues();

    newBorrowerPage.saveChanges();
});

When("I delete the following borrower record:", (dataTable) => {
    let details = dataTable.rowsHash();

    dashboardPage.clickNavigationLabel("Borrower");
    dashboardPage.clickSubNavigationLabel("List of borrowers");
    
    newBorrowerPage.deleteBorrowerFromList(details);
});

Then("the new borrower with the following info is available in the list of borrowers:", (dataTable) => {
    let values = dataTable.rowsHash();

    dashboardPage.clickNavigationLabel("Borrower");
    dashboardPage.clickSubNavigationLabel("List of borrowers");
    newBorrowerPage.verifyBorrowerExistsInList(values);
});

Then("the following borrower record is deleted:", (dataTable) => {
    let values = dataTable.rowsHash();

    newBorrowerPage.verifyBorrowerDoesNotExistsInList(values);
});

