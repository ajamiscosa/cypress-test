class NewBorrowerPage {
    elements = {
        firstNameInput:  () => cy.get("#first_name"),
        middleNameInput: () => cy.get("#middle_name"),
        lastNameInput:   () => cy.get("#last_name"),
        idNumberInput:   () => cy.get("#id_no"),
        emailInput:      () => cy.get("#email"),
        phoneNumberInput:() => cy.get("#phone_number"),
        dobInput:        () => cy.get("#date_of_birth"),
        addressLine1:    () => cy.get("#address_1"),
        city:            () => cy.get("#city"),
        country:         () => cy.get("#country"),
    };
}

export const newBorrowerPage = new NewBorrowerPage();