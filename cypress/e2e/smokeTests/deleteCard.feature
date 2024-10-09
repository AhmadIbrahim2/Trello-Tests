Feature: Delete Card Functionality

    Scenario: Validate that the user can delete existing card
        Given The user navigate to the card
        When Click on Archive
        And Click on Delete
        And Confirm card deletion
        Then The card should be deleted from the list