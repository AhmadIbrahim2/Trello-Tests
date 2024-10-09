class MoveTemplateActions {

    openCard(url){
        cy.visit(url);
        return this;
    };

    clickOnMoveButton(){
        cy.findByTestId("card-back-move-card-button").click();
        return this;
    };

    clickOnSelectListField(){
        cy.findByTestId("move-card-popover-select-list-destination").click();
        return this;
    };

    selectListToMoveTo(newList){
        cy.contains(`${newList}`).click();
    };

    clickOnMoveToConfirm(){
        cy.findByTestId("move-card-popover-move-button").click();
        return this;
    };

    clickOnCloseButton(){
        cy.findByTestId("CloseIcon").first().click();
        return this;
    }

};

export default MoveTemplateActions;