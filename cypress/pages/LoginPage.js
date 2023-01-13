export class LoginPage {
    elements = {
        usernameInput: () => cy.get("#username"),
        passwordInput: () => cy.get("#password"),
        branchInput: () => cy.get("[name=branch_id]"),
        loginBtn: () => cy.get("button[type=submit]").contains("Login"),
        errorMsgField: () => cy.get('.error')
    };

    typeUsername(username) {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }
    
    selectBranch(branch) {
        if(branch === null || branch === undefined || branch === '') {
            return;
        }
        this.elements.branchInput().select(branch);
    }

    submitLogin(username, password, branch){
        this.typeUsername(username);
        this.typePassword(password);
        this.selectBranch(branch);
        this.clickLogin();
    }

    verifyLoginFailed(errorMessage) {
        let errMsg = errorMessage ?? 'Invalid username/password';
        this.elements.errorMsgField().should('be.visible');
        this.elements.errorMsgField().should('contain.text', errMsg);
    }
}

export const loginPage = new LoginPage();
