Feature: Move Card Template to any list functionality

Scenario: Validate that the user can move template to any list
    Given The user navigat to the card template
    When Click on Move button
    And Click on select list field
    And Select the list to move the card template to
    And Click on Move to confirm the transfer
    And Click on close button
    Then The card template should be moved to the selected list

