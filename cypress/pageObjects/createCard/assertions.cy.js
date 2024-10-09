class CreateCardAssertions {
    verifyCardCreated(cardName){
        cy.findByTestId("card-name").should("be.visible").and("contain",cardName)
        return this;
    }
};

export default CreateCardAssertions;