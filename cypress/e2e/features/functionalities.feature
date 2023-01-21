Feature: System Functionalities

    Features of the System


    Background:
        Given the user is logged in

    Scenario: Borrower - New Record
        When I create a new borrower with the following details:
            | First Name     | Leon                       |
            | Last Name      | Guerrero                   |
            | Email Address  | leon.guerrero@testmail.com |
            | Phone Number   | 0012312345                 |
            | Date of Birth  | 01/01/1970                 |
            | Address Line 1 | 123 Grove Street           |
            | City           | Daly City                  |
            | Country        | United States              |
        Then the new borrower with the following info is available in the list of borrowers:
            | First Name     | Leon                       |
            | Last Name      | Guerrero                   |
            | Email          | leon.guerrero@testmail.com |
            | Phone Number   | 0012312345                 |

    Scenario: Borrower - Delete Record
        When I delete the following borrower record:
            | First Name     | Leon                       |
            | Last Name      | Guerrero                   |
            | Email          | leon.guerrero@testmail.com |
            | Phone Number   | 0012312345                 |
        Then the following borrower record is deleted:
            | First Name     | Leon                       |
            | Last Name      | Guerrero                   |
            | Email          | leon.guerrero@testmail.com |
            | Phone Number   | 0012312345                 |
