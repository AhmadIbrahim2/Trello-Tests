class CloseBoardActions {

    openBoard(url){
        cy.visit(url);
        return this;
    }

    clickOnBoardActionsMenu(){
        cy.get(".GDunJzzgFqQY_3").click();
        return this;
    }

    selectCloseBoard(){
        cy.get(".js-react-root").find(".board-menu-navigation-item-link").click()
    }

    clickOnClose(){
        cy.findByTestId("close-board-confirm-button").click()
    }
}

export default CloseBoardActions;