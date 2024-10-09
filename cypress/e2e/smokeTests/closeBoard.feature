Feature: Close Board Functionality

    Scenario: Validate that the user can close a board
        Given The user navigate to the Board
        When The user click on board actions menu
        And The user select Close Board from the menu
        And Click on Close button
        Then The board should be closed successfully