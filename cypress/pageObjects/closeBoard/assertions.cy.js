class CloseBoardAssertions {

    CheckClosedBoard(){
        cy.get(".xJP6EH9jYQiWkk").should("be.visible").and("contain","This board is closed. Reopen the board to make changes.")
    }
}

export default CloseBoardAssertions;