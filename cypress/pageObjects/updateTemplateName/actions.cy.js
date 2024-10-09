class UpdataTemplateNameActions {

    openCard(url){
        cy.visit(url);
        return this;
    };

    clickOnCardTitleTextArea(){
        cy.wait(3000)
        cy.findByTestId("card-back-title-input").click();
        return this;
    };

    enterTemplateName(newName){
        cy.findByTestId("card-back-title-input").clear().type(newName);
        return this;
    };

    clickOnCloseButton(){
        cy.findByTestId("CloseIcon").first().click();
        return this;
    };
};

export default UpdataTemplateNameActions;