class CreateBoardActions {

    clickOnCreateButton(){
        cy.findByTestId("header-create-menu-button").click();
        return this;
    }

    chooseCreateBoard(){
        cy.findByTestId("header-create-board-button").click();
        return this;
    }

    typeBoardTitle(boardName){
        cy.findByTestId("create-board-title-input").type(boardName);
        return this;
    }

    clickOnCreate(){
        cy.findByTestId("create-board-submit-button").click();
        return this;
    }
}

export default CreateBoardActions;