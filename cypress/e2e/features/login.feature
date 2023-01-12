Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given the browser is at login page

    # Scenario: Success Login
    #     When I logged in with the following details:
    #         | Username | admin       |
    #         | Password | admin123    | 
    #         | Branch   | Main Branch |
    #     Then I am successfully logged in

    Scenario: Failed Login
        When I logged in with the following details:
            | Username | admin123    |
            | Password | admin123    | 
            | Branch   |             |
        Then the login failed