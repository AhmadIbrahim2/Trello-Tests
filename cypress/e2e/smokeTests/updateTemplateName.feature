Feature: Update Name Of Template

    Scenario: Validate that the user can update template name
        Given The user navigate to the card template
        When Click on card title text area
        And Enter new name for the template
        And Click on Close button
        Then The new name should be displayed in the card title field