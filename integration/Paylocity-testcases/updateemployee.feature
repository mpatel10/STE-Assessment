Feature: update Employee

    As an Employer 
    I want to update my employee data so that I can get a preview of benefit costs.
       
        
   Scenario: update Employee
        Given I as an Employer
        Then I click Edit button
        Then I can edit employee details
        Then the data should be updated in the table
        Then logout of application