Feature: Create New Template “Card Template”

    Scenario: Validate that the user can create tempalte "card template"
        Given The user navigate to the board
        When Click on create from template button
        And Click on create a new template button
        And Type template title in template title input field
        And Click on Add button
        And Close the Form
        Then The card template should be created successfully
