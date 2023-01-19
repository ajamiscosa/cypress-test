class DashboardPage {
    elements = {
        navLabel: () => cy.get(".nav-label"),
        subNavLabel: () => cy.get("a")
    };

    clickNavigationLabel(label) {
        this.elements.navLabel().contains(label).click();
    }

    clickSubNavigationLabel(label) {
        this.elements.subNavLabel().contains(label).click();
    }
}

export const dashboardPage = new DashboardPage();