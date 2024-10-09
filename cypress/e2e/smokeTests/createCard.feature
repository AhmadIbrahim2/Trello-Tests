Feature: Create new card functionality

    Scenario: Validate that the user can create card
        Given The user navigate to the board
        When Click on Add a card button
        And Types a name in the card title input field
        And Click on Add card button
        Then The new card should be created successfully