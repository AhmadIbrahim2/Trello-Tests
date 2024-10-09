class ChangeBackgroundActions {
   
    openBoard(url){
        cy.visit(url);
        return this;
    };

    clickOnMenuIcon(){
        cy.get("[aria-label='Show menu']").click();
        return this;
    };

    clickOnChangeBackground(){
        cy.get("button").contains("div","Change background").click();
        return this;
    };

    chooseBackgroundType(){
        cy.findByTestId("board-background-photo-section").click();
        return this;
    };

    chooseBackgroundPhoto(){
        cy.findByTestId("board-background-select-photo-5").click();
        return this;
    }
};

export default ChangeBackgroundActions;