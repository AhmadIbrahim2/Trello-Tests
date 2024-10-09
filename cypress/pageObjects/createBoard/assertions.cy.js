class CreateBoardAssertions {

    checkTheBoardExist(boardName) {
        cy.findByTestId("board-name-display").should("be.visible").and("contain",boardName);
        return this;
    }
}

export default CreateBoardAssertions;