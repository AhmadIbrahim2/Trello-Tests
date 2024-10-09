Feature: Hide Card Template functionality

    Scenario: Validate that the user can hide card template
        Given That the user navigate to the tempalte card
        When The user click on the Hide from list button
        And Click on close button
        Then The card template should be hidden from the list
