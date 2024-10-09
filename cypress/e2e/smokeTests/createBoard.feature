Feature: Create New Board

    Scenario: Validate that the user can create new board
        Given The user login in trello website
        When Click on create button from navbar
        And Choose create board from drop down options
        And Type the board title in board title field
        And Click on create button
        Then The board will be created successfully