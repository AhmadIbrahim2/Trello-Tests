class UpdateTemplateNameAssertions {
    verifyTemplateName(newName){
        cy.contains(`${newName}`).should("be.visible");
        return this;
    }
};

export default UpdateTemplateNameAssertions;