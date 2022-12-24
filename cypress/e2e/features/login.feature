Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given the browser is at ClaimCenter login page
    Scenario: Success Login
        When I logged in as "aapplegate"
        Then the ClaimCenter desktop should be accessible