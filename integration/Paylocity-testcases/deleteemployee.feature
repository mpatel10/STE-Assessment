Feature: delete Employee

    As an Employer 
    I want to delete my employee data; verify updates are saved.
     

  Scenario: delete Employee
        Given I as an Employer
        When I am on the Benefits Dashboard page
        Then I click Delete icon
        Then the table is updated
        Then logout of application