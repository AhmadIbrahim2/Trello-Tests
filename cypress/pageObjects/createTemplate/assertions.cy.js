class CreateTemplateAssertions {

    verifyCardTemplateCreated(templateName){
        cy.contains(`${templateName}`).should("be.visible");
        return this; 
    };
    
};

export default CreateTemplateAssertions;