class Dashboard {
    elements = {
      desktopTab: () => cy.get("#TabBar-DesktopTab")
    };

    verifyDesktopTabExists() {
        this.elements.desktopTab().should('be.visible');
    }
}

export const tabBar = new Dashboard();