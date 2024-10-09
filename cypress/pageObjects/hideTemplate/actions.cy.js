class HideTemplateActions {

    openCard(url){
        cy.visit(url);
        return this;
    };

    clickHideFromListButton(){
        cy.wait(2000);
        cy.findByTestId("card-back-archive-button").click();
        return this;
    };

    clickCloseButton(){
        cy.findByTestId("CloseIcon").first().click();
        return this;
    }
};

export default HideTemplateActions;