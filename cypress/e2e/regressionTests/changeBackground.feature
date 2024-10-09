Feature: Change Board Background

    Scenario: Validate that the user can change board background
        Given The user navigate to the board
        When Click on menu icon
        And Click on Change background
        And Choose Photos or Colors
        And Choose the background
        Then The background of the board should be changed