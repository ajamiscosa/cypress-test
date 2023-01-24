class NewBorrowerPage {
    elements = {
        firstNameInput:    () => cy.get("#first_name"),
        middleNameInput:   () => cy.get("#middle_name"),
        lastNameInput:     () => cy.get("#last_name"),
        idNumberInput:     () => cy.get("#id_no"),
        emailInput:        () => cy.get("#email"),
        phoneNumberInput:  () => cy.get("#phone_number"),
        dobInput:          () => cy.get("#date_of_birth"),
        addressLine1Input: () => cy.get("#address_1"),
        cityInput:         () => cy.get("#city"),
        countryInput:      () => cy.get("#country"),

        tab:               () => cy.get(".nav-item").get(".nav-link"),

        passwordInput:     () => cy.get("#password"),
        passwordReInput:   () => cy.get("#repassword"),

        saveButton:        () => cy.get("#btn-save"),

        borrowersTable:    () => cy.get("#tbl_borrowers")
    };

    navigateToTab(tab) {
        this.elements.tab().contains(tab).click();
    }

    setPersonalInformation(values) {
        let firstName    = values['First Name'];
        let middleName   = values['Middle Name'];
        let lastName     = values['Last Name'];
        let id_no        = values['ID Number'];
        let email        = values['Email Address'];
        let phone        = values['Phone Number'];
        let dob          = values['Date of Birth'];
        let addressLine1 = values['Address Line 1'];
        let city         = values['City'];
        let country      = values['Country'];

        id_no = cy.nullcheck(id_no) ? '123456' : id_no;

        this.elements.firstNameInput().type(firstName);
        
        if(!cy.nullcheck(middleName)) {
            this.elements.middleNameInput().type(middleName);
        }

        this.elements.lastNameInput().type(lastName);
        this.elements.idNumberInput().type(id_no);
        this.elements.emailInput().type(email);
        this.elements.dobInput().type(dob);
        this.elements.phoneNumberInput().type(phone);
        this.elements.addressLine1Input().type(addressLine1);
        this.elements.cityInput().type(city);
        this.elements.countryInput().type(country);
    }

    setDefaultPasswordValues() {
        this.elements.passwordInput().type('Password@123');
        this.elements.passwordReInput().type('Password@123');
    }

    saveChanges() {
        this.elements.saveButton().click();
    }

    verifyBorrowerExistsInList(details) {
        this.elements.borrowersTable()
            .find('tbody tr')
            .its('length')
            .should('be.gte', 1);
        
        let table = this.elements
            .borrowersTable()
            .getTable({ onlyColumns: Object.keys(details) });
        
        table.should(tableData => {
            expect(tableData).to.deep.include(details)
        });
    }

    verifyBorrowerDoesNotExistsInList(details) {
        return this.elements.borrowersTable().contains('td', details['Last Name']).should('not.exist') &&
            this.elements.borrowersTable().contains('td', details['First Name']).should('not.exist') &&
            this.elements.borrowersTable().contains('td', details['Email']).should('not.exist') &&
            this.elements.borrowersTable().contains('td', details['Phone Number']).should('not.exist');
    }

    deleteBorrowerFromList(details) {
        this.elements.borrowersTable()
            .contains('td', details['Email'])
            .parent('tr')
            .within(() => {
                cy.get('td').eq(1).contains(details['Last Name']);
                cy.get('td').eq(2).contains(details['First Name']);
                cy.get('td').eq(5).contains(details['Email']);
                cy.get('td').eq(6).contains(details['Phone Number']);
                cy.get('td').eq(0).find('.btn-delete').click();
            });

        cy.contains('button', 'OK').click();
    }
}

export const newBorrowerPage = new NewBorrowerPage();