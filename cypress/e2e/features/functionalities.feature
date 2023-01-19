Feature: System Functionalities

    Features of the System


    Background:
        Given the user is logged in

    Scenario: Borrower - New Record
        When I create a new borrower with the following details:
            | Username | admin       |
            | Password | admin123    | 
            | Branch   | Main Branch |