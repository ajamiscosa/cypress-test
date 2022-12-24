class LoginPage {
  elements = {
    usernameInput: () => cy.get("#Login-LoginScreen-LoginDV-username"),
    passwordInput: () => cy.get("#Login-LoginScreen-LoginDV-password"),
    loginBtn: () => cy.get("#Login-LoginScreen-LoginDV-submit")
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
