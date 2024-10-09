Feature: Delete list functionality

    Scenario: Validate that the user can delete existing list
        Given The user navigate to the board
        When Click on the list actions menu
        And Choose archive this list from menu
        Then The list should be deleted from the board

