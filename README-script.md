## Testing Script for K-Loans by Softreliance

The tests are written in BDD format. (more on BDD [here](https://www.guru99.com/bdd-testing-rest-api-behave.html).)

Based on my personal experience, the typical structure of a BDD testing framework consists of:
  1. Features
  2. Steps (Step Definitions)
  3. Scenario / Implementation (Actual Test Execution Scripts)

In this case, the Scenario code is integrated together with the Page definitions so we will be calling it ***Scenario Pages***. 


I have covered here two features: 
1. Login
   1.1 Successful Login
   1.2 Failed Login - Invalid Credentials
   1.3 Failed Login - Invalid Branch
2. Borrower
   2.1 Borrower - New Record
   2.2 Borrower - Delete Record



### Code
`.visit()` navigates to the specified url
`.url()` gets the current url. typically used to check paths
`.get()` finds and assigns the specified selector to a variable. 
`.type()` is well, used to type. Typically used on textfield type elements
`.click()` is used to click on elements, typically used on buttons. 
`.clear()` is used to clear the current text of a textfield type element
`.select()` is used on dropdowns to select the expected value
`.should()` is used in assertion or to determine if the attached selector satisfies the indicated condition
`.contains()` finds and checks if a certain element has a child element with matching text as specified in the parameter


### Datatables
`.rowsHash()` creates a key-value pair based on the provided table on the step


### Custom Commands
`cy.nullcheck()` a function I created to do basic nullchecks on a specified variable


### Other dependencies
`"cypress-get-table": "^1.0.1"` used in datatable for easier assertion
- Please refer to `NewBorrowerPage.js` lines 67-79
