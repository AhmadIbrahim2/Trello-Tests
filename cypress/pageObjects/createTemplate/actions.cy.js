class CreateTemplateActions {

    openBoard(url){
        cy.visit(url);
        return this;
    };

    clickOnCreateFromTemplate(){
        cy.findByTestId("card-template-list-button").first().click();
        return this;
    };

    clickOnCreateATemplate(){
        cy.findByTestId("create-new-template-card-button").click();
        return this;
    };

    typeTemplateName(templateName){
        cy.findByTestId("create-template-card-composer").type(templateName);
        return this;
    };

    clickOnAddButton(){
        cy.findByTestId("new-template-card-submit-button").click();
        return this;
    };

    closeForm(){
        cy.findByTestId("CloseIcon").first().click();
        return this;
    };
    
};

export default CreateTemplateActions;

