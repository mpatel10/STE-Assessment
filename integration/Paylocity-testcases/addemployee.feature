 Feature: add Employee

    As an Employer 
    I want to add employee data so that I can get a preview of benefit costs.
       
        
   Scenario: add Employee
        Given I as an Employer
        When I select Add Employee
        Then I should be able to enter employee details
        Then the employee should save 
        Then the data is saved in the table
        Then logout of application
       

        
        

